'use server';

import Question from '@/database/question.model';
import Tag from '@/database/tag.model';
import { connectToDatabase } from '../mongoose';
import { CreateQuestionParams, GetQuestionsParams } from './shared.types';
import User from '@/database/user.model';
import { revalidatePath } from 'next/cache';
/**
 * ? getQuestions
 * ? (page?: num, pageSize?: num, searchQuery?: str, filter?: str)
 * * GET a list of Questions.
 *
 * ? createQuestion(
 * ? (title: str, content: str, tags: str[], author: ObjectId | IUser, path: str)
 * * POST a new Question.
 */

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 }); // i come from a land down under
    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  // eslint-disable-next-line no-empty
  try {
    // connect to db
    connectToDatabase();

    const { title, content, tags, author, path } = params;
    // create question
    const question = await Question.create({
      title,
      content,
      author,
    });
    const tagDocuments = [];
    // create tags or get them if they already exist

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, 'i') } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    revalidatePath(path);
    // purges cached data on demand
  } catch (err) {
    // error handling
  }
}

/**
 * ! GPT*1
 * Esse trecho de código usa o método findOneAndUpdate do MongoDB, que encontra um documento correspondente à condição especificada e o atualiza, se existir, ou o cria (insere) se não existir. Aqui está uma explicação detalhada:
 *
 * * Tag: refere-se ao modelo do MongoDB para a coleção 'Tag'.
 * * findOneAndUpdate: é um método que procura um documento que atende aos critérios especificados e o atualiza, ou o cria se não for encontrado.
 *
 * ? Parâmetros:
 * * Filter (Filtro):
 * { name: { $regex: new RegExp(^${tag}$, 'i') } }: O filtro procura um documento na coleção 'Tag' onde o campo 'name' corresponde à expressão regular, que neste caso é uma correspondência insensível a maiúsculas e minúsculas ('i'), com a string tag no início.
 *
 * * Update (Atualização):
 * { $setOnInsert: {name:tag}, $push: { question: question._id } }: Isso especifica as atualizações que devem ser aplicadas ao documento encontrado ou inserido.
 * $setOnInsert: Define o campo 'name' como o valor da variável tag apenas durante a inserção.
 * $push: Adiciona o ID da pergunta (question._id) ao array 'question' no documento.
 *
 * * Options (Opções):
 * { upsert: true, new: true }: upsert: true: Indica que, se não encontrar um documento correspondente, o MongoDB deve inserir um novo documento com os campos especificados no filtro.
 * new: true: Retorna o documento modificado, se existir, após a atualização.
 * Portanto, este código procura por uma tag com o nome correspondente, cria uma nova se não existir e, em ambos os casos, adiciona a ID da pergunta ao array de 'question' na tag.
 */

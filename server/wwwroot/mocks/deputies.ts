import * as faker from 'faker';
import { DeputiesInfo } from 'src/app/model';

export const url: string = faker.internet.url();
export const name: string = faker.random.word();
export const errorMessage = faker.random.words();

export const deputiesInfo: DeputiesInfo = {
  id: faker.random.number(),
  uri: faker.internet.url(),
  nome: name,
  siglaPartido: faker.random.word(),
  uriPartido: faker.internet.url(),
  siglaUf: faker.random.word(),
  idLegislatura: faker.random.number(),
  urlFoto: faker.internet.url(),
  email: faker.internet.email(),
};

export const deputiesInfoList = {
  dados: [
    deputiesInfo, deputiesInfo
  ]
};


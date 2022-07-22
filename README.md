# barberproject
Tecnologias usadas: 

1-React
2-Express(nodej)
3-typescript
4-docker
5-typeorm(postgres)

Como iniciar o projeto ?
1- Deverá ter instalado o docker com a imagem do postgres
2- Abra cada pasta de forma individual 
![image](https://user-images.githubusercontent.com/80259818/180435042-af1e1d7b-a071-4eba-ad5c-a4ad55f2412c.png)
![image](https://user-images.githubusercontent.com/80259818/180435283-90bab4d8-c08f-4ce4-954a-815e19923bbd.png)

3- Vamos iniciar com o backend. Com o terminal do backend aberto instale todas as dep dele

![image](https://user-images.githubusercontent.com/80259818/180435445-909de68e-708f-46a2-839f-22c188c0ab27.png)
![image](https://user-images.githubusercontent.com/80259818/180435474-560160ab-468f-4045-8174-5cf01660b7a7.png)

3.1- Após instalada as dep, vamos rodar o docker com o comando docker-compose up 

![image](https://user-images.githubusercontent.com/80259818/180435633-adab073e-73ad-4686-a775-d811fae511d0.png)

3.2 -Quando aparecer isso, significa que esta startado: 

![image](https://user-images.githubusercontent.com/80259818/180435697-13fdec3e-a444-4301-b2ab-59a0d9107d92.png)

3.3 -Com o docker já iniciado e criado a imagem, vá até o arquivo ormconfig.jso, mude e salve o host para localhost, para podermos rodar as migrations

![image](https://user-images.githubusercontent.com/80259818/180436357-ff8c707b-3e10-4cc5-ad49-c7ab48de5a1f.png)

3.4- após ter mudado no ormconfig vamos rodar as migrations, sem finalizar o docker, abra outro terminal dentro do mesmo projeto 
![image](https://user-images.githubusercontent.com/80259818/180436512-92f2e5ee-966c-4082-a736-ea2f66e81a53.png)
 
3.4.1- Deixe o terminal rodando o docker ainda acontecendo, no outro terminal já mudado o arquivo do ormconfig, rode o comando yarn typeorm migration:run

![image](https://user-images.githubusercontent.com/80259818/180436703-c3fc012f-e52a-4b7c-89ed-4434ab03d95f.png)

3.4.2 - Caso tenha dado tudo certo deverá acontece isso : 

![image](https://user-images.githubusercontent.com/80259818/180436763-00183100-ed93-415e-a9b7-b0e789a47c1a.png)

3.5- Após ter rodado as migrations, volte ao arquivo ormconfig.json e retorne o host para database

![image](https://user-images.githubusercontent.com/80259818/180436904-fe5619c9-0bb5-4a32-a27d-c799c4c4085b.png)

3.6- Após isso o backend está rodando e pronto para ser consumido

4.0- Agora instale as dependencias do front
![image](https://user-images.githubusercontent.com/80259818/180437108-7d3c19b8-c90c-4237-a480-fae68a0de389.png)
![image](https://user-images.githubusercontent.com/80259818/180437123-30f8edbc-10a6-4702-ba54-0da1831a9d62.png)

4.1- após instalada as dep, inicie o front, abra seu terminal e inicie com yarn start
![image](https://user-images.githubusercontent.com/80259818/180437241-cd9afa70-461d-4e12-8056-39309b3a93c8.png)

Caso tudo dê certo irá aparecer em seu navegador

![image](https://user-images.githubusercontent.com/80259818/180437302-eca8c0fe-a509-43e7-bc13-acdb5d4e3d62.png)

Lembrando que o backend precisa estar rodando simultaneamente com o front, necessita primeiramente ser iniciado o backend


PS: não esqueca de criar sua conta.



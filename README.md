# Team Soft Backend Application

This application was built with the purpose of answering the interview challenge proposed by TeamSoftBR Company, listed [here](https://github.com/Teamsoftbr/join-backend).

## Installation

```bash
git clone https://github.com/hikinine/teamsoft-backend
cd teamsoft-backend
yarn install
```

## Creating database (MySQL) with all entire schema
This application is using [Prisma ORM](https://prisma.io). You can easily setup the database by following next steps.
##### Fill up database creds on ```/.env``` file

```
DATABASE_USER=hiki9
DATABASE_PASSWORD=password
DATABASE_HOST=localhost
DATABASE_PORT=3306
```
save the file, then
```bash
yarn prisma db push
```
#### OR (not recommended)
access ``/src/shared/infra/prisma/migrations/*.sql`` and build by yourself.

## Getting started

Since it's only for test purpose, build mode isn't available.
Run in development mode
```bash
yarn dev --traceHttpRequests
```
#### CLI Options
``--traceHttpRequests`` = Trace Http interface and given pretty logs.  
``--disableErrorLog``= Disable error log on console 



## Documentation

Documentation available in ``/v1/docs``  
```bash
httplocalhost:3001/v1/docs
```

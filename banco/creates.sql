
create table usuario(
    id    bigint auto_increment primary key,
    email  varchar(255) null,
        nome  varchar(255) null
);


create table projeto (
    id    bigint auto_increment primary key,
    nome varchar(255) null,
    valor double     not  null,
    usuario_id bigint       null,
    constraint FK_TEST_USUARIO foreign key (usuario_id) references usuario (id)
);


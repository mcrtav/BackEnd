-- create table usuarios(
-- nome text,
-- idade int,
-- senha text
	
-- );

-- insert into public.usuarios 
-- ( nome, idade, senha)
-- valueS
-- ( 'Miriam', '49', '1234');

-- insert into public.usuarios 
-- ( nome, idade, senha)
-- valueS
-- ( 'Marcia', '30', '1234');

-- insert into public.usuarios 
-- ( nome, idade, senha)
-- valueS
-- ( 'João', '25', '1234');


-- insert into public.usuarios 
-- ( nome, idade, senha)
-- valueS
-- ( 'Miriam ', '25', '1234');


-- SELECT NOME, idade, senha from usuarios;
drop table produtos;


create table produtos(
nome text,
tipo text,
preco float 
	);

insert into produtos
	(nome, tipo, preco)
values
    ('Harry Potter e a Pedra Filosofal', 'Livro', 49.99),
    ('Feijão Preto', 'Alimento', 2.99),
    ('1984', 'Livro', 29.99),
    ('Arroz Integral', 'Alimento', 4.99),
    ('Cem Anos de Solidão', 'Livro', 39.99),
    ('Azeite de Oliva Extra Virgem', 'Alimento', 14.99),
    ('O Senhor dos Anéis', 'Livro', 59.99),
    ('Chocolate Amargo 70%', 'Alimento', 7.99),
    ('Dom Quixote', 'Livro', 54.99),
    ('Salmão Fresco', 'Alimento', 19.99);


delete from produtos
where nome = '1984';


UPDATE produtos
SET preco = 30.00
WHERE nome = 'Salmão Fresco';


SELECT * from produtos;



-- ============================================================






criar uma tabela chamada pessoas com coluas nome, idade e altura e  uma lsita de 10 linhas 


CREATE TABLE pessoas (
    nome TEXT,
    idade INTEGER,
    altura DECIMAL(5, 2)
);

INSERT INTO pessoas (nome, idade, altura) VALUES
    ('João', 25, 1.75), 
    ('Maria', 30, 1.65),
    ('Carlos', 22, 1.80),
    ('Ana', 35, 1.70),
    ('Pedro', 28, 1.78),
    ('Luísa', 40, 1.60),
    ('Rafael', 18, 1.85),
    ('Isabel', 32, 1.68),
    ('Miguel', 27, 1.75),
    ('Fernanda', 38, 1.72);


DELETE FROM pessoas
WHERE nome = 'Carlos';

UPDATE pessoas
SET idade = 26, altura = 1.80
WHERE nome = 'João';


select * from  pessoas
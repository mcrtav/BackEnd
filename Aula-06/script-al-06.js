// git clonehttps://github.com/Maycon-Santos/curso.git

// git --version
// git clone https://github.com/mcrtav/Aula-07.git

//htps://github.com/mcrtav/Aula-06.git

// git config --global user.email "mcrtav@gmail.com"
// git config --global user.name "mcrtav"

// git init

// git add .\index.js

// git commit -m "Primeira Mensagem"

// git remote add origin https://github.com/mcrtav/Aula-07.gitdir

https://github.com/mcrtav/Aula-06.git

//git push -u origin main
git commit -m "reset"

git branch
 git push origin 
git status
index.js
console.log("Miriam aqui")
*/
//======================================
//                      
// git init



//======================================
// para publicar no repositorio remoto
//======================================
// git branch
// git add . // git add -a // git add all
// git commit -m "Primeira Mensagem"
// git branch => para o primeiro // git push  => para os demais



//======================================
// para sincronizar do repertorio git => /remoto// para o local => computador do usuario
//======================================
// git pull
// git fetch ? ? ?

git reset -- hard  
git reset -- hard branch
git reset -- hard HEAD
git reset -- mixed
git reset -- mixed  branch
git reset -- mixed HEAD

git branch -d 
git checkout

git checkout main
git restore  master
git rebase master


git push --help

…or create a new repository on the command line

echo "# Aula-07" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/mcrtav/Aula-07.git
  git push -u origin main

…or push an existing repository from the command line

git remote add origin https://github.com/mcrtav/Aula-07.git
  git branch -M main
  git push -u origin main

…or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
//  for using git first of all have to install git software from offcial website 
//  to check successfully git install or not , just go to desktop and press mouse left button and 
// check have GUI Base or not

// for using git firstly have to do just some formarlity using any coommand Promt 

git --version // or 
git -v // for check git version 

// ===  setting git =====

git config  --global user.name "Md Fakhrul Islam " // set Name as commit point 
git config  --global user.email "1nayan122@gmail.com" // set email in git 
git config --list  // for check set Name and  Email 

// ==== InitiaLization  git 

git init // initialization as a git reposiory 
// when we init git at that time a MASTER  BRANCH  will open in git folder and this branch will track all version change

git status // for check the situation the git reposiory 

git add <fileName> // or 
git add index.js // for stages single file *** before commited , firstly have to stages *****
git rm --cached <file> // to unstages single file 
git add . // for staging all find and then redy to be commited 
git commit -m "First Commit" // for commit 
git log // for checking commit and can see commit address 
git log --oneline  // shortcut checking target result **commit address used for going to one commit to another commit . thats mean one version to another version 
git checkout commitAddress fileName // or
git checkout 5455dje  index.js  // for change according to commit address 
git reset index.js // to unstages 
git checkout -- index.js // to go latest version 

// ===== gitignore =======
// to gitignore first of all have to create .gitignore  file 
// gitignore not working on previous commited file
// to ignore file just type file name in ignore file     . such as index.js
// to ignore directory/ foldeer just use / before directory name . such as /folderName

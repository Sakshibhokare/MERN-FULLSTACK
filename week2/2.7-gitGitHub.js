//git: free and open source version control 
//  types of VCs 
// centralized- good for backup ex.subversion and team foundation server
// Distributed vcs- eg. git and mercurial / even the server is down people still can make the changes 
// people can independently work together 
// why git:
// free 
// open source 
// scalable 
// cheap branching and merging 


// git vs gitHub 
// gitHub: used for hosting git repos 
// cloud based 
// provides a web interface 

// git: version control 
// local on computer 

// push: send a change to another repo 
// pull : grab a change from repo 


// working directory -> git add -> staging area -> git commit ->git push -> repository


// Blobs Binary large object 
// trees represent a directory 



// Authentication - need to add ssh key in case of mac and linux 
// create a SSh key on git bash 
// put the key on github setting 

// github flow - write code -> commit code changes -> pull request 
// local git workflow - write code -> stage code changes git add -> commit changes git push



// git branching: master -> develop -> topic
// create new branch 
// git branch - current branch
// git checkout -b feature_update_file / create new branch 
// git checkout main / go back to main

// making changes into the file 
// add 
// commit 
// need to merge the branch / git merge feature_update_file
// need to set upstream / git push -u origin feature_update_file

// then go to github and merge the pull request 
// add details 
// create pull request 

// git diff - to see changes 


// git commands to resolve conflicts 
// git log --merge: produce the list of commits that are causing the conflict 
// git diff: Identify the difference between the states repositories or files 
// git checkout: used to undo the changes made to the file or for changing branches 
// git reset: use to go back to the working stage 
// git reset --mixed: used to undo changes to the working directory and staging area 
// git merge --abort: helps in existing the merge process and returning back to the state before the merging began 
// git reset: used at the time of merge conflict to reset the conflicted files to their original state 


// to delete any branch 
// git branch -d branch_name 


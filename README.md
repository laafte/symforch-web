# symforch-web
The website for Studentersamfundets Symfoniorkester, available at [symforch.no](https://www.symforch.no).

## Prerequisites
* Git
* Hugo

## How to
1. Clone the repo:
`git clone git@github.com:laafte/symforch-web.git`

2. Add submodule: 
`git submodule update --init --recursive`

3. Start development server:
`hugo server`
Edit the source code and see the changes apply live on `http://localhost:1313`

4. Deploy with `deploy.sh`
`./deploy.sh <samfundet-username>`

> [!NOTE]
> Remember to push your changes to the remote repository:
> `git add .`
> `git commit -m "Some descriptive commit message"`
> `git push`


## Misc
Old command to add submodule(?): `git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod`

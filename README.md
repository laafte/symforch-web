# symforch-web

The website for Studentersamfundets Symfoniorkester, available at [symforch.no](https://www.symforch.no). The site is built with Hugo and the theme [PaperMod](https://github.com/adityatelange/hugo-PaperMod).

## Prerequisites

* Git
* Hugo
* Access to Cassarossa

## Access to Cassarossa

To be able to deploy the site to Samfundet's server, SSH-access to Cassarossa (`cassarossa.samfundet.no`) is required as the `deploy.sh` script has to be run in the context of a user.

Contact ITK at [itk@samfundet.no](mailto:itk@samfundet.no) to request access. Specifically, write permissions to `/home/cassarossa/laafte/symforch/web/build` is required, which might require the user to be part of the groups `laafte` and `symforch-web`.

## Hugo installation

Hugo can be installed in multiple ways (see [gohugo.io/installation](https://gohugo.io/installation/)), but a simple way to install it on Linux and MacOS is with [Homebrew](https://brew.sh/): 

```brew install hugo```

> [!TIP]
> If you're on Windows, Homebrew can be used through [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/)

## First-time setup (or re-cloning)

1. Clone the repository:
`git clone git@github.com:laafte/symforch-web.git`

2. Add hugo-PaperMod submodule (required when re-cloning repository)
`git submodule update --init --recursive`

## Update hugo-PaperMod version

This doesn't need to be done often, but if there are new features introduced in [hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod), running updating the submodule version is necessary:
`git submodule update --remote --merge`

## Typical workflow

1. Grab the latest commits from the remote:
`git pull`

2. Start development server:
`hugo server`

3. Edit the source code:
Site is rendered locally and can be viewed on `localhost:1313` in your browser.

4. Commit and push local changes
    * `git add .`
    * `git commit -m "Some descriptive commit message"`
    * `git push`

5. Deploy with `deploy.sh`:
`./deploy.sh <samfundet-username>`

Immediately after the deploy script has run, the updated site will be viewable on [symforch.no](https://symforch.no).

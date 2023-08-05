# Developer docs with subtree example

Testing access

## Overview

### Add a new document source as a git subtree

1. Add the "remote" with `git remote`
2. Add the subtree refence with `git subtree add` to the src/content directory

### Project setup

3. Define new collection information (schema) in content/config.ts
4. Create a page directory for the new collection with the some basic files:
   1. index.astro
   2. [...slug].astro

### Update subtree content

Assume some rules are in place such as:

- do not modifiy upstream content (or more research)
- pulls are explicit with the possibility of future automation

5. Pull changes from subtree upstream with `git subtree pull`

## Git subtree commands

**Add a reference to the remote repository**

```bash
git remote add -f docs-civil https://github.com/jbend/docs-civil.git
```

**Add subtree**

```bash
git subtree add --prefix src/content/civil --squash docs-civil main
```

**Pull changes from the remote repository**

```bash
git subtree pull --prefix=src/content/civil --squash docs-civil main
```

**subtree extras**

Remove a subtree with git rm

```bash
// remove a subtree with git rm
git rm -rf civil
```

### Test repos

[dev-docs](https://github.com/jbend/dev-docs)

[civil docs](https://github.com/jbend/docs-civil)

### References

[git-subtree man page from debian](https://manpages.debian.org/testing/git-man/git-subtree.1.en.html)

[Git memo guide?](https://git-memo.readthedocs.io/en/latest/subtree.html)

[Stackoverflow move or remove a subtree](https://stackoverflow.com/questions/49028258/git-remove-subtree-or-change-directory-of-subtree)

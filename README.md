# Developer docs with subtree example

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

# Developer docs with subtree example

**Add a reference to the remote repository**

```bash
git remote add -f docs-civil https://github.com/jbend/docs-civil.git
```

**Add subtree**

```bash
git subtree add --prefix civil --squash docs-civil main
```

**Pull changes from the remote repository**

```bash
git subtree pull --prefix=civil --squash docs-civil
```

```

```

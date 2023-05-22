function chooseN(items, n) {
  let choices = [];
  for (let i = 0; i < n; i++) {
    const item = choice(items);
    choices.push(item);
    remove(items, item);
  }
  return choices;
}

function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  const index = items.indexOf(item);
  const found = items.splice(index, 1);
  if (found.length !== 0) return found;
  return undefined;
}

export { chooseN, choice, remove };

const totalCount = 100;

const box = document.getElementById("box");

const ids = [];

for (let i = 0; i < totalCount; i++) {
  const item = document.createElement("div");
  const itemContainer = document.createElement("div");
  item.innerText = `数据加载中...`;
  itemContainer.className = "item";
  itemContainer.id = i + 1;
  //   item.style.display = "none";
  itemContainer.appendChild(item);
  box.appendChild(itemContainer);
}

const io = new IntersectionObserver(
  (entried) => {
    entried.forEach((change) => {
      if (change.intersectionRatio > 0) {
        ids.push(change.target.id);
        const children = change.target.children[0];
        children.innerText = `这是第${change.target.id}条数据`;
        // children.style.display = "block";
      } else {
      }
    });
  },
  {
    root: document.getElementById("box"),
    threshold: [0, 1],
  }
);

const items = document.getElementsByClassName("item");

Array.from(items).forEach((ele) => {
  io.observe(ele);
});

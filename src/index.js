import "./style.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 完了したリストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "todo";
  p.innerText = text;

  // divタグの子要素に各要素を設定
  div.appendChild(p);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.closest("li"));

    //完了済みリストに追加する要素
    const addTarget = completeButton.closest("li");
    const div = addTarget.firstChild;

    // TODO内容テキストを取得
    const text = div.firstElementChild.innerText;

    // div以下を初期化
    div.textContent = null;

    // pタグを生成
    const p = document.createElement("p");
    p.className = "todo";
    p.innerText = text;

    // buttonタグ作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻るボタンの親タグ(li)を完了したリストから削除
      deleteFromCompleteList(backButton.closest("li"));

      //完了済みリストの要素を取得
      const addTarget = backButton.closest("li");
      const div = addTarget.firstChild;

      // テキストを取得
      const text = div.firstElementChild.innerText;

      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //delete(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.closest("li"));
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

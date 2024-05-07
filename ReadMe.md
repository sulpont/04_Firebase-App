
# markdown-app README
> マークダウン記法が身近になるアプリ

### 1.ディスクリプション・使い方


### 2.今回頑張ったこと・できたこと・機能

- SaaSっぽいUI/UXを意識した（ヘッダー固定、ハンバーガーメニュー、送信後の挙動、CSSの擬似クラスをまとめて書くなど）
- ログイン・ログアウトは、山崎学校長のYouTubeを参考にした。
- memo1〜3の内容をRealtimeDBへ繋ぎこむ。

### 3.難しかったこと・実装したかったけどできなかったこと

- **→参考にした資料に沿って、Node.js -> homebrew -> npm の環境構築をしたが、恐らく権限と各バージョンのエラー続発で挫折。**
- CSSのライブラリ、CSS自体がいろいろとバッティングし、一部思った見た目にならず。
最終的には、CSS内に　`content: "\f08b";`　という感じでont AwesomeのUnicodeを記述してアイコン設置しました。
- 初期状態のSDKには"databaseURL"が含まれておらず、RealtimeDBの作成後にもう一度取得する必要あり。
```
  databaseURL: "https://markdown-app-*****-default-rtdb.firebaseio.com",
```
- textareaをライブラリでエディタ化すると、id#を仕込んでいたのに無意味になることに気づいた。
- 保存先をフォルダ・ファイル形式でツリー化したかった（Firebase側は五月雨で良い）。
- **→総じて、作りたいもの＋作りたいもの＝できない...という状況。**

### 4.前回の課題からの成長！

- 黒い画面（ターミナル）への抵抗がなくなった。
- Firebaseということもあり、公式ドキュメントを読み込む機会が増えた。
- CSSのライブラリは何がいいか？なんて考える余裕が出てきた。

### 5.参考にしたサイト等

- [Firebase/Google認証を解説（Realtime Database）2023年：最新バージョン10対応、JavaScript応用
](https://www.youtube.com/watch?v=D47A-t_Ng5s&t=2195s) - 山崎学校長のYoutube

# React + TypeScript + MicroCMS

## 概要
- React + TypeScript + MicroCMSを利用したブログを構築
- Reactの関数コンポーネントを利用
- スタイリングはstyled-componentsを利用（MedibaPJのスマチャレでも利用しているため）
- 今後JSで記述することは少ないためTSを利用
- localhostで確認してもらえるようMediba PJのMicroCMSアカウントと連携

## .envファイル
- ./.env
- 2022年4月頃にMediba PJで実施していたモブのmicroCMSアカウントです。
```
REACT_APP_API_URL= corpo... 
REACT_APP_API_KEY= 26b6d...
```

## Nodeバージョン
```
v16.13.1
```

## 確認方法
```
yarn install
yarn start
```

## 実装について

今回は極力ライブラリを使わず実装しました。

`src/components/parts/Pagination.tsx`のコードがやや複雑になり、今後の改善点と認識しています。

次回はより業務を意識しライブラリなどを活用した実装にしたいと思います。
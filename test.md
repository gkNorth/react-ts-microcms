# テスト

## テストの種類
- Unit Test
  - コンポーネント単位で実施するテスト
  - 親からのpropsをmockに置き換えてテストを実施する
- Intergration Test
  - Reduxなど状態管理ライブラリーとの連動性をテストする
- E2E
  - 実際にブラウザで操作した挙動をシミュレーションするテスト

## Reactでのテスト
Jest + React-Testing-Library (or Enzyme)

### Jest
- npm test
- test case
- expext

### RTL
- render
- userEvent
- custom hook
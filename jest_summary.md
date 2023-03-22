# Jest

## Jestとは

JavaScriptのテストフレームワークで、Facebookが開発・メンテナンスしている。
主にReactやVue, Node.jsなどのJavaScriptベースのアプリケーションで使用される。

## JSテストライブラリー

Jest, Mocha, Jasmine, QUnit, AVA, Tape, Enzyme

## Jestの導入方法

### Jestのインストール

```
yarn add jest
```

### Jestの設定

jest.config.js

```
module.exports = {
  // テストを実行する際のルートディレクトリを指定
  rootDir: '.',
  // テスト対象となるファイルの拡張子を指定
  moduleFileExtensions: ['js', 'json', 'ts'],
  // テストを検索するディレクトリを指定
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  // テストを実行する際の環境を指定
  testEnvironment: 'node',
}
```

## Jestでのテストの書き方
```
function add(a, b) {
  return a + b
}

describe('add関数のテスト', () => {
  it('1 + 2は3である', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('0 + 0は0である', () => {
    expect(add(0, 0)).toBe(0)
  })
})
```
## Jestの設定オプション
- **testMatch** : テストファイルを指定するための正規表現パターン
- **moduleNameMapper** : モジュール名をマップするための正規表現パターン
- **transform** : テストファイルをトランスパイルするためのモジュールを指定する
- **setupFilesAfterEnv** : テスト実行前に実行されるグローバルセットアップスクリプトのパスを指定する
- **coverageThreshold** : カバレッジの閾値を指定する
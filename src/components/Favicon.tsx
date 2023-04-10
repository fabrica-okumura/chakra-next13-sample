const Favicon = (): JSX.Element => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      {/* ↓colorにサイトのテーマカラー（コード）を設定する。 */}
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff" />
      {/* ↓タッチアイコン用のタイトルを設定する。半角11文字｛全角6文字｝まで対応。 */}
      <meta name="apple-mobile-web-app-title" content="Fabrica採用" />
      {/* <meta name="application-name" content="ウェブアプリの場合にアプリ名を設定する。単なるウェブサイトにはアプリケーション名を定義するべきではない。"/> */}
      {/* ↓IE8に対応させる場合は有効にする。 */}
      {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
      {/* ↓contentにサイトのテーマカラー（コード）を設定する。 */}
      <meta name="msapplication-TileColor" content="#ffffff" />
      {/* ↓Windows8/10のスタート画面のピン留め画像に対応させるためのもの。 */}
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      {/* ↓モバイルブラウザのメニューバーなどの背景色設定が必要な場合は変更する。 */}
      <meta name="theme-color" content="#ffffff" />
    </>
  )
}

export default Favicon

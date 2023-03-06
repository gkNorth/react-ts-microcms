import styled from "styled-components";

export const About = () => {
  return (
    <PostWrapper className="about">
      <CardTitle>About</CardTitle>
      <div>
        北海道から世界に向けたエンジニアリングを展開し、デジタルソサエティとなる未来に価値あるサービス創造を目指す
      </div>
      <div>
        私たちは“スマート＆テクノロジーで歴史に残る社会システムを創る！”というミッションのもと、民主的でデジタルソサエティな未来を信じ、クラウド・モバイル・IoT・ブロックチェーン・AIなどの基軸となるテクノロジーをベースとして、社会に革命をもたらす時代に適応した事業を推進して参ります。<br />
        21世紀となる今、コト・感動・共感・人間らしさ優先のオープンで自律分散型で多様性を重視した「なぜやるか？」を中心とした社会へと移行しています。<br />
        ノースディテールは、このデジタルソサエティへ進む時代において価値のあるサービス創造を目指し、"Create Social Value" をスローガンに「モノづくり」へとことんこだわり「コトづくり」の意識をもって、北海道や国内のみならず世界に向けたエンジニアリングを展開します。
      </div>
    </PostWrapper>
  );
}

const PostWrapper = styled.div`
  padding: 20px;
`
const CardTitle = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 15px;
`
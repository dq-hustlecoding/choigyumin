import MemoirLayout from '@/layouts/MemoirLayout';

export default function Prologue() {
  return (
    <MemoirLayout currentSlug="prologue">
      <p className="text-xl italic text-gray-600 dark:text-gray-400 text-center mb-8">
        &ldquo;너 고향이 어디야?&rdquo;
      </p>

      <p>
        누군가 이렇게 물으면, 나는 항상 잠시 멈칫한다.
      </p>

      <p>
        화곡동. 시화. 제주도. 다시 시화. 안산. 관악구.
        그리고 결혼 후에도 거의 매년 이사를 다녔다.
        지금까지 10개가 넘는 집에서 살았다.
      </p>

      <p>
        한곳에서 쭉 자란 친구들이 부러웠던 적이 있다.
        초등학교부터 고등학교까지 같은 동네에서,
        같은 친구들과 함께 자란 그들에게는 &lsquo;고향&rsquo;이라는 단단한 뿌리가 있었다.
      </p>

      <p>
        나에게는 그런 게 없었다.
        어딜 가도 &lsquo;새로 온 애&rsquo;였고,
        어딜 떠나도 &lsquo;떠난 애&rsquo;가 됐다.
      </p>

      <hr className="my-8" />

      <p>
        하지만 돌이켜보면, 그 방랑의 시간들이 나를 만들었다.
      </p>

      <p>
        제주도의 바람은 나에게 넓은 세상을 보여줬고,
        시화의 친구들은 20년이 넘는 우정을 선물했다.
        안산의 학원가에서 새벽까지 공부하며 꿈을 키웠고,
        기숙사 생활은 나를 어른으로 만들었다.
      </p>

      <p>
        그리고 마침내, 책상에 써놓은 대로—
      </p>

      <p className="text-lg font-semibold text-center my-6">
        서울대학교 수리통계학과.
      </p>

      <p>
        이것은 고향 없는 아이가 자신만의 뿌리를 찾아가는 이야기다.
      </p>

      <hr className="my-8" />

      <p className="text-center text-gray-500 dark:text-gray-400 italic">
        화곡동의 어느 추운 겨울,<br />
        그곳에서 이 이야기는 시작된다.
      </p>
    </MemoirLayout>
  );
}

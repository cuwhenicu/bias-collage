import './index.css'

export default function App() {
  return (
    <div className="flex flex-col w-full px-5 py-5 h-dvh justify-end items-center bg-white">
      <div className="w-full h-[75%] flex flex-col justify-evenly">
        <div className="flex flex-col items-center">
          <div className="font-semibold text-4xl text-base-600">
            <span>My </span>
            <span className="text-rose-500 text-5xl font-extrabold">K</span>
            <span>up Of Tea</span>
          </div>
          <span className="text-base-400 text-sm font-medium tracking-[-2%] 'leading-[130%]',">
            Kpop 취향표 생성기
          </span>
        </div>
        <div className="flex-grow" />
        <div className="flex flex-col w-full">
          <button className="transition-all duration-100 flex flex-col w-full items-start justify-start px-7 pt-6 h-[124px] border border-gray-300 rounded-md mb-2">
            <div className="font-semibold text-[18px] text-gray-800">
              하나의 팀에서 선택하기
            </div>
            <div className="text-start font-medium text-[12px] text-gray-400 mb-2">
              한 그룹에서만 선택해서
              <br />
              취향표를 만들어요
            </div>
          </button>
          <button className="transition-all duration-100 flex flex-col w-full items-start justify-start px-7 pt-6 h-[124px] border border-gray-300 rounded-md mb-2">
            <div className="font-semibold text-[18px] text-gray-800">
              여러 팀에서 선택하기
            </div>
            <div className="text-start font-medium text-[12px] text-gray-400 mb-2">
              여러 그룹을 자유롭게 선택해서
              <br />
              취향표를 만들어요
            </div>
          </button>
        </div>
        <div className="flex-grow" />
        <div className="flex flex-col items-center mb-4 w-full">
          <a
            className="underline text-gray-400 font-medium text-[13px] mb-3"
            href="request"
          >
            추가요청이 있다면 알려주세요!
          </a>
          <a
            href="https://twitter.com/DevvTyga"
            className="text-medium text-xs text-gray-300"
          >
            @DevvTyga
          </a>
        </div>
      </div>
    </div>
  )
}

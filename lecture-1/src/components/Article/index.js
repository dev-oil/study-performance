import React from 'react'

import './index.css'

function zeroPad(value, len) {
  const str = '0000000000' + value.toString()
  return str.substring(str.length - len)
}

/* 파라미터 참고: https://unsplash.com/documentation#supported-parameters */
function getParametersForUnsplash({width, height, quality, format}) {
  return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`
}

/*
 * 파라미터로 넘어온 문자열에서 일부 특수문자를 제거하는 함수
 * (Markdown으로 된 문자열의 특수문자를 제거하기 위함)
 * */
// bottleneck 해결 방안
// 1. 특수 문자 효율적으로 제거하기
  // 1-1. replace 함수와 정규식 사용
  // 1-2. 마크다운의 특수문자를 지워주는 라이브러리 사용 (remove-markdown 등)
// 2. 작업하는 양 줄이기
  // 2-1. 최대 9만자의 내용을 다 검사할 필요 없다. 화면에 최대 2~300자 정도만 보여지는데 그정도만 검사해주면 된다.
function removeSpecialCharacter(str) {
  let _str = str.substring(0, 300).replace(/[#_*~&;!\[\]`>\n=\-]/g, '');

  return _str
}

function Article(props) {
  const createdTime = new Date(props.createdTime)
  return (
    <div className={'Article'}>
      <div className={'Article__summary'}>
        <div className={'Article__summary__title'}>{props.title}</div>
        <div className={'Article__summary__desc'}>{removeSpecialCharacter(props.content)}</div>
        <div className={'Article__summary__etc'}>
          {createdTime.getFullYear() +
            '.' +
            zeroPad(createdTime.getMonth() + 1, 2) +
            '.' +
            zeroPad(createdTime.getDate(), 2)}
        </div>
      </div>
      <div className={'Article__thumbnail'}>
        <img src={props.image + getParametersForUnsplash({width: 240, height: 240, quality: 80, format: 'jpg'})} alt="thumbnail" />
      </div>
    </div>
  )
}

export default Article

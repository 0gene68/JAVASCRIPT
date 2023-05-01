import React, { Component } from 'react';

// 생성한 Component들을 불러옴
import Func1 from './funcType/Func1';
import Func2 from './funcType/Func2';
import Class1 from './classType/Class1';
import Class2 from './classType/Class2'

function AppTest() {
  return (
    // div 태그 안에 생성한 컴포넌트들을 추가함
    <div>
      <Func1 />
      <Func2 />
      <Class1 />
      <Class2 />
    </div>
  );
}

export default AppTest;

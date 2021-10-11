//State는 컨텍스트의 상태에 따라 전략이 변경되는 전략 패턴의 변형
//선택이 완료되면 전략은 컨텍스트의 나머지 수명 동안 변경되지 않습니다.
//유연함 과 디커플링에서 최상의 결과를 제공
//디커플링 : 느슨한결합

//기본적인 fail-sfafe-socket 구현

const OffineState = require('./oMineState')
const OnlineState = require('/onlineState')

class FailsafeSocket{
    constructor(options){
        this.options = options;
        this.queue = [];
        this.currentState = null;
        this.socket = null;
        this.states = {
            offline: new OffineState(this),
            online: new OnlineState(this)
        };
        this.changeState('offline')
    }

    changeState(state){
        console.log('Activating state :' + state);
        this.currentState = this.states[state];
        this.currentState.activate();
    }

    send(data){
        this.currentState.send(data)
    }
}

module.exports = options => {
    return new FailsafeSocket(options);
}





'use strict';
const t = $lockerEvalHelpers$,
    {
        b$LWS: e,
        s$LWS: n
    } = $lockerEvalContext$;
const i = t.makeRedGet(() => e[0](), () => e[1]());
const r = t.makeRedResyncImports(i);
r();
class s {
    constructor() {
        this.state = Object.create(null);
        this.actions = Object.create(null);
        this.mutations = Object.create(null);
        this.listeners = [];
        this.modules = Object.create(null);
        this.pendingActions = []
    }
    register(t, e) {
        a(this, t, e)
    }
    commit(t, e) {
            const n = this.mutations[t];
            if (!n) {
                return
            }
            let r = t.substring(0, t.lastIndexOf(".
                        "));let s=i[0].getValue(this.state,r);let a=n(e);if(a&&s!==a){this.state=i[0].setValue(this.state,r,a);this.listeners.slice().forEach(n=>{n({data:e,path:t},this.state,s)})}}getAction(t){return this.actions[t]}waitForAction(t,e){if(!this.actions[t]){this.pendingActions.push({path:t,callback:e});return}e()}subscribe(t){if(this.listeners.indexOf(t)<0){this.listeners.push(t)}return()=>{let e=this.listeners.indexOf(t);if(e>=0){this.listeners.splice(e,1)}}}}n[2](s);function a(t,e,n){let{initialState:i=n.state,actions:r={},mutations:s={},modules:u={}}=n;l(t,e,i);Object.keys(r).forEach(n=>c(t,e,n,r[n]));Object.keys(s).forEach(n=>o(t,e,n,s[n]));Object.keys(u).forEach(n=>a(t,`${e}.${n}`,u[n]));t.modules[e]=n}function c(t,e,n,i){const r=`${e}.${n}`;t.actions[r]=function n(...r){let s=u(t,e);return i(...r,s)};const s=t.pendingActions.filter(t=>t.path===r);s.forEach(({callback:t})=>t());if(s.length>0){t.pendingActions=t.pendingActions.filter(t=>!s.includes(t))}}function o(t,e,n,i){t.mutations[`${e}.${n}`]=function n(r){let s=u(t,e);return i(r,s.state,{update:s.update})}}function l(t,e,n){let r=n;if(i[0].isFunction(n)){r=n()}t.state=i[0].setValue(t.state,e,r||Object.create(null))}function u(t,e){return{get state(){return i[0].getValue(t.state,e)},commit:(n,i)=>{t.commit.bind(t)(`${e}.${n}`,i)},rootState:t.state,update:(n,r)=>{let s=i[0].getValue(t.state,e);return i[0].updateValue(s,n,r)}}}const f=new s;function g(t){return i[0].getValue(f.state,t)}function d(t,e){return i[0].setValue(f.state,t,e)}n[3]({state:f.state,commit:f.commit.bind(f),getAction:f.getAction.bind(f),waitForAction:f.waitForAction.bind(f),register:f.register.bind(f),subscribe:f.subscribe.bind(f),get:g,set:d,utils:i[0],modules:{common:i[1]}})
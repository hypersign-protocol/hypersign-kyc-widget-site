(function(){"use strict";var e={15006:function(e,t,n){var r=n(65514);const s=new r.ZP.WebAuth({domain:"fidato.us.auth0.com",clientID:"hwM9GmM4nUstds9Fw5KsYZVDboJBeLTL",responseType:"token id_token",scope:"openid profile email"});t.Z=s},22170:function(e,t,n){var r=n(28047),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[];const a=n(29251),i=256,c=1e4;async function u(e,t){if(!t)throw Error("Encryption error: Password is empty.");if(!e)throw Error("Encryption error: Message is empty.");const n=a.lib.WordArray.random(16),r=a.PBKDF2(t,n,{keySize:i/8,iterations:c}),s=a.lib.WordArray.random(16),o=a.AES.encrypt(e,r,{iv:s,padding:a.pad.Pkcs7,mode:a.mode.CBC}),u=n.toString()+s.toString()+o.toString();return u}async function l(e,t){if(!t)throw Error("Decryption error: Password is empty.");if(!e)throw Error("Decryption error: Message is empty.");const n=a.enc.Hex.parse(e.substr(0,32)),r=a.enc.Hex.parse(e.substr(32,32)),s=e.substring(64),o=a.PBKDF2(t,n,{keySize:i/8,iterations:c}),u=a.AES.decrypt(s,o,{iv:r,padding:a.pad.Pkcs7,mode:a.mode.CBC});if(!u)throw Error("Decryption error: Could not decrypt the data. Please check your password.");return u.toString(a.enc.Utf8)}var d={name:"App",components:{},methods:{},async created(){const e=JSON.stringify({hello:"world"}),t="Vishwas1@gmail",n=await u(e,t),r=await l(n,t);console.log({encryptedMessage:n,decryptMessage:r})}},h=d,g=n(43736),p=(0,g.Z)(h,s,o,!1,null,null,null),f=p.exports,m=(n(61074),n(3060),n(82801),n(57658),n(87896));const v="https://api.entity.hypersign.id",y="0a88981d30e66a8b188760b081c14.02178535aa9c0ee9fe6cf4e2e3902559f12357c93d44df1959229122def5be650303272f2dc4d5443cb7275c25e2566e5",S="https://stage.hypermine.in/kavach",k="https://<subdomain>.api.cavach.hypersign.id/api/v1";r.ZP.use(m.ZP);var w=new m.ZP.Store({state:{qrString:"",phoneNumber:"",finalResult:{},aadharData:{},authorization:null,steps:[{id:0,isActive:!0,stepName:"SignIn",previous:0},{id:1,isActive:!1,stepName:"VaultPIN",previous:0},{id:2,isActive:!1,stepName:"AppInstructions",previous:1},{id:3,isActive:!1,stepName:"Liveliness",name:"Facial Recognition",previous:2},{id:4,isActive:!1,stepName:"IdDocs",name:"Government-issued ID",previous:3},{id:5,isActive:!1,stepName:"UserConsent",name:"Provide User Consent",previous:4},{id:6,isActive:!1,stepName:"FinalResult",previous:5}],schemaIds:{PersonhoodCredential:{schemaId:"sch:hid:testnet:z6Mkvtd73dDgg7HU8wLCmXbe2RAHPAU1Ex1VUXCFtPV7u36i:1.0",issuer:"did:hid:testnet:zCyAz2wfKjAaWE4FW75KxpZh2wuo9kRAUZyV2xEe93cKr"},CitizenshipCredential:{schemaId:"sch:hid:testnet:z6Mkkm7paF78CWtrpviRkwb83t99u34Up7tjjnap8yw1pWfz:1.0",issuer:"did:hid:testnet:zCyAz2wfKjAaWE4FW75KxpZh2wuo9kRAUZyV2xEe93cKr"},DateOfBirthCredential:{schemaId:"sch:hid:testnet:z6MkfaUxChNFzjsUzxNSHkJ928WcXPFhbNb4cXp1U6yce7t3:1.0",issuer:"did:hid:testnet:zCyAz2wfKjAaWE4FW75KxpZh2wuo9kRAUZyV2xEe93cKr"},PassportCredential:{schemaId:"sch:hid:testnet:z6MkgMXXQL7YD7BufNLbjrwueoj4nmih9xujJ6aozJDmzFWx:1.0",issuer:"did:hid:testnet:zCyAz2wfKjAaWE4FW75KxpZh2wuo9kRAUZyV2xEe93cKr"}},hasLivelinessDone:!1,hasKycDone:!1,kycExtractedData:{},finalResults:!1,livelinessResult:{},ocrIDDocResult:{},livelinessCapturedData:{tokenSelfiImage:""},kycCapturedData:{tokenFrontDocumentImage:"",tokenFaceImage:"",countryCode:""},authenticationAccessToken:{},ifNewUser:!1,userPresentationConsent:{},idToken:""},getters:{getActiveStep:e=>{const t=e.steps.find((e=>1==e.isActive));if(!t){const t=e.steps.find((e=>1==e.isActive));return t}return t},getSession(){return localStorage.getItem("session")},getCavachAccessToken(){return localStorage.getItem("cavachAccessToken")},getRedirectUrl(){return localStorage.getItem("redirectUrl")},getAuthServerAuthToken(){return localStorage.getItem("authServerAuthToken")},getFinalResult(e){return e.finalResult},getProfile(){const e=localStorage.getItem("profile");return e?JSON.parse(e):null},getVaultPin(){return localStorage.getItem("vaultPin")},getVaultLockStatus(){return localStorage.getItem("vaultLockStatus")},getVaultData(){return localStorage.getItem("vaultData")},getVaultDataRaw(){const e=localStorage.getItem("vaultDataRaw");return JSON.parse(e)},getVaultDataCredentials(e={}){console.log("filterCondition ="+e);const t=localStorage.getItem("vaultDataRaw"),n=JSON.parse(t),{hypersign:r}=n,{credentials:s}=r;return s},getUserDID(){const e=localStorage.getItem("vaultDataRaw");if(e){const t=JSON.parse(e),{hypersign:n}=t;if(n)return n.did}},getPresentationRequest(){return localStorage.getItem("presentationRequest")},getSSIAccessToken(){return localStorage.getItem("ssiAccessToken")},getPresentationRequestParsed(){const e=localStorage.getItem("presentationRequest"),t=atob(e);return JSON.parse(t)},getTenantSubdomain(){return localStorage.getItem("subdomain")},getTenantKycServiceBaseUrl(){const e=localStorage.getItem("subdomain");if(!e)throw new Error("Invalid accessToken");return k.replace("<subdomain>",e)}},mutations:{nextStep:(e,t=null)=>{const n=e.steps.find((e=>1==e.isActive)),r=t||n.id+1;e.steps[n.id].isActive=!1,e.steps[r].isActive=!0},previousStep:e=>{const t=e.steps.find((e=>1==e.isActive)),n=t.previous;e.steps[t.id].isActive=!1,e.steps[n].isActive=!0},setAuthorization:(e,t)=>{e.authorization=t,localStorage.setItem("authorization",t)},setQrString:(e,t)=>{e.qrString=t},setImage:(e,t)=>{e.imageData=t},setPhoneNumber:(e,t)=>{e.phoneNumber=t},setFinalResult:(e,t)=>{e.finalResult={...t}},setAadhaarData:(e,t)=>{e.aadharData={...t}},setLivelinessDone(e,t){e.hasLivelinessDone=t},setKycDone(e,t){e.hasKycDone=t},setSession(e,t){console.log(e.hasKycDone),localStorage.setItem("session",t)},setKycExtractedData(e,t){e.kycExtractedData=t.data,e.hasKycDone=t.status},setCavachAccessToken(e,t){console.log(e.kycCapturedData),localStorage.setItem("cavachAccessToken",t)},setRedirectUrl(e,t){console.log(e.kycCapturedData),localStorage.setItem("redirectUrl",t)},setPresentationRequest(e,t){console.log(e.kycCapturedData),localStorage.setItem("presentationRequest",t)},setSSIAccessToken(e,t){console.log(e.kycCapturedData),localStorage.setItem("ssiAccessToken",t)},setResult(e,t){e.finalResult=t},setLivelinessResult(e,t){e.livelinessResult={...t}},setOcrIdDocResult(e,t){e.ocrIDDocResult={...t}},setLivelinessCapturedData(e,t){e.livelinessCapturedData={...t}},setKycCapturedData(e,t){e.kycCapturedData={...t}},setThridPartyAuth(e,t){e.authenticationAccessToken={...t}},setProfile(e,t){console.log(e.hasKycDone),localStorage.setItem("profile",JSON.stringify(t))},setAuthServerAuthToken(e,t){console.log(e.hasKycDone),localStorage.setItem("authServerAuthToken",t)},setVaultPin(e,t){console.log(e.hasKycDone),localStorage.setItem("vaultPin",t)},setVaultData(e,t){console.log(e.hasKycDone),localStorage.setItem("vaultData",t)},setVaultRaw(e,t){console.log(e.hasKycDone),localStorage.setItem("vaultDataRaw",t)},setVaultLockStatus(e,t){console.log(e.hasKycDone),localStorage.setItem("vaultLockStatus",t)},setAsNewUser(e,t){console.log(e.hasKycDone),e.ifNewUser=t},setUserPresentationConsent(e,t){e.userPresentationConsent=t},setIdToken(e,t){e.idToken=t},setTenantSubdomain(e,t){console.log(e.hasKycDone),localStorage.setItem("subdomain",t)}},actions:{addharQRVerify:({state:e})=>new Promise(((t,n)=>{console.log("Inside addharQRVerify");const r=S+"/api/v1/aadhaar/qr/verify";fetch(r,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Authorization:e.authorization},body:JSON.stringify({qrString:e.qrString})}).then((e=>e.json())).then((e=>{if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());t(e)})).catch((e=>{n(e.message)}))})),setJWT:({commit:e})=>new Promise(((t,n)=>{const r=v+"/api/v1/app/oauth";fetch(r,{method:"POST",headers:{"Content-Type":"application/json","X-Api-Secret-Key":y},body:void 0}).then((e=>e.json())).then((n=>{if(400==n.statusCode)throw new Error("Bad Request "+n.message.toString());e("setAuthorization","Bearer "+n.access_token),t()})).catch((e=>{n(e.message),localStorage.removeItem("authorization")}))})),setSession:({state:e})=>new Promise(((t,n)=>{console.log("Inside addharQRVerify");const r=S+"/api/v1/aadhaar/session";fetch(r,{method:"POST",credentials:"include",headers:{"content-type":"application/json",Authorization:e.authorization},body:void 0}).then((e=>e.json())).then((e=>{if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());t(e)})).catch((e=>{n(e.message)}))})),verifyPhoneNumber:({state:e})=>new Promise(((t,n)=>{console.log("Inside addharQRVerify");const r=S+"/api/v1/aadhaar/ph/verify";fetch(r,{method:"POST",credentials:"include",body:JSON.stringify({phoneNumber:e.phoneNumber}),headers:{"content-type":"application/json",Authorization:e.authorization}}).then((e=>e.json())).then((e=>{if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());t(e)})).catch((e=>{n(e.message)}))})),verifyImage:({state:e})=>new Promise(((t,n)=>{console.log("Inside verifyImage");const r=S+"/api/v1/aadhaar/img/verify";fetch(r,{method:"POST",credentials:"include",body:JSON.stringify({userImage:e.imageData}),headers:{"content-type":"application/json",Authorization:e.authorization}}).then((e=>e.json())).then((e=>{if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());t(e)})).catch((e=>{n(e.message)}))})),getFinalResult:({state:e})=>new Promise(((t,n)=>{console.log("Inside addharQRVerify");const r=S+"/api/v1/aadhaar/result";fetch(r,{method:"GET",credentials:"include",headers:{Authorization:e.authorization,"content-type":"application/json"}}).then((e=>e.json())).then((e=>{if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());t(e)})).catch((e=>{n(e.message)}))})),getNewSession:({commit:e,getters:t},n)=>new Promise(((r,s)=>{const o=`${t.getTenantKycServiceBaseUrl}/e-kyc/verification/session`,a={Authorization:"Bearer "+t.getCavachAccessToken,Origin:"http://localhost:4999/","content-type":"application/json"};return fetch(o,{method:"POST",headers:a,body:JSON.stringify(n)}).then((e=>e.json())).then((t=>{t.statusCode&&200!=t.statusCode?s(t.message):t.error?s(t):(t&&e("setSession",t.sessionId),r(t))})).catch((e=>{s(new Error(`Error while fetching session  ${e}`))}))})),verifyResult:({commit:e,getters:t,state:n})=>new Promise(((r,s)=>{if(Object.keys(n.userPresentationConsent).length<=0)return s(new Error("No user consent found"));const o=`${t.getTenantKycServiceBaseUrl}/e-kyc/verification/consent`,a={Authorization:"Bearer "+t.getCavachAccessToken,Origin:"http://localhost:8080/","content-type":"application/json"};return fetch(o,{method:"POST",headers:a,body:JSON.stringify({sessionId:t.getSession,presentation:n.userPresentationConsent})}).then((e=>e.json())).then((t=>{t.statusCode&&200!=t.statusCode?s(t.message):t.error?s(t):(t&&!0===t.success&&(e("setResult",t.success),e("setIdToken",t.idToken)),r(t))})).catch((e=>{s(new Error(`Verifying the result  ${e}`))}))})),verifyLiveliness:({commit:e,state:t,getters:n,dispatch:r})=>new Promise(((s,o)=>{if(""===t.livelinessCapturedData.tokenSelfiImage||!t.hasLivelinessDone)return o("User has not performed liveliness check");const a=`${n.getTenantKycServiceBaseUrl}/e-kyc/verification/passive-liveliness`,i={Authorization:"Bearer "+n.getCavachAccessToken,Origin:"http://localhost:8080/","content-type":"application/json","x-ssi-access-token":n.getSSIAccessToken,"x-issuer-did":n.getPresentationRequestParsed.issuerDID,"x-issuer-did-ver-method":n.getPresentationRequestParsed.issuerDIDVerificationMethod};return fetch(a,{method:"POST",headers:i,body:JSON.stringify({sessionId:n.getSession,tokenSelfiImage:t.livelinessCapturedData.tokenSelfiImage,userDID:n.getUserDID})}).then((e=>e.json())).then((async t=>t.statusCode&&200!=t.statusCode?o(t.message):t.error?o(t):t&&3===t.serviceLivenessResult?(e("setLivelinessResult",t),await r("updateVaultCredentials",t.credential),s(t)):void o(new Error("Error verifying liveliness check, error code: "+t.serviceLivenessResult)))).catch((e=>o(new Error(`Verifying the result  ${e}`))))})),verifyOcrIDDoc:({commit:e,state:t,getters:n,dispatch:r})=>new Promise(((s,o)=>{if(""===t.kycCapturedData.tokenFrontDocumentImage||!t.hasKycDone)return o("User has not performed ID capturing");const a=`${n.getTenantKycServiceBaseUrl}/e-kyc/verification/ocr-id-doc`,i={Authorization:"Bearer "+n.getCavachAccessToken,Origin:"http://localhost:8080/","content-type":"application/json","x-ssi-access-token":n.getSSIAccessToken,"x-issuer-did":n.getPresentationRequestParsed.issuerDID,"x-issuer-did-ver-method":n.getPresentationRequestParsed.issuerDIDVerificationMethod};return fetch(a,{method:"POST",headers:i,body:JSON.stringify({documentType:0,tokenFrontDocumentImage:t.kycCapturedData.tokenFrontDocumentImage,tokenFaceImage:t.kycCapturedData.tokenFaceImage,countryCode:t.kycCapturedData.countryCode,sessionId:n.getSession,userDID:n.getUserDID})}).then((e=>e.json())).then((t=>t.statusCode&&200!=t.statusCode?o(t.message):t.error?o(t):t&&0===t.serviceFacialAuthenticationResult?(e("setOcrIdDocResult",t),t.credentials&&t.credentials.length>0&&t.credentials.forEach((e=>{console.log("Updating each credentila in vault credential id "+e.id),r("updateVaultCredentials",e)})),s(t)):o(new Error("Error verifying ID document, error code: "+t.serviceFacialAuthenticationResult)))).catch((e=>{o(new Error(`Verifying the result  ${e}`))}))})),registerUser:({commit:e,getters:t})=>new Promise(((n,r)=>{const s="https://authserver.hypersign.id/hs/api/v2/register",o={"content-type":"application/json"},{email:a,name:i,accessToken:c}=t.getProfile;return fetch(s,{method:"POST",headers:o,body:JSON.stringify({user:{name:i,email:a,did:"did:hid:testnet:z6MkwF5rDNi3oKiUaqA5aN9yLDW5zTUA4ghshW8Soq4M92ED"},isThridPartyAuth:!0,expirationDate:"2030-12-31T00:00:00.000Z",thridPartyAuthProvider:"Google",accessToken:c})}).then((e=>e.json())).then((t=>{if(t){if(t.error)return r(t.error);403===t.status?e("setAsNewUser",!1):e("setAsNewUser",!0),e("setAuthServerAuthToken",t.authToken),n(t)}})).catch((e=>{r(new Error(`Verifying the result  ${e}`))}))})),syncUserData:({getters:e})=>new Promise(((t,n)=>{const{email:r}=e.getProfile;if(!r)return n(new Error("Invalid email, or user is not logged in"));if(!localStorage.getItem("vaultData"))return n(new Error("Invalid vault data"));const s="https://authserver.hypersign.id/hs/api/v2/sync",o={"content-type":"application/json",Authorization:"Bearer "+e.getAuthServerAuthToken};return fetch(s,{method:"POST",headers:o,body:JSON.stringify({user:{userId:r,sequenceNo:0,docId:"randomId"},document:{encryptedMessage:localStorage.getItem("vaultData")}})}).then((e=>e.json())).then((e=>{if(e){if(e.error)return n(e.error);t()}})).catch((e=>{n(e)}))})),syncUserDataById:({getters:e,commit:t})=>new Promise(((n,r)=>{const{email:s}=JSON.parse(localStorage.getItem("profile"));if(!s)return r(new Error("Invalid email, or user is not logged in"));const o="https://authserver.hypersign.id/hs/api/v2/sync/"+s,a={"content-type":"application/json",Authorization:"Bearer "+e.getAuthServerAuthToken};return fetch(o,{method:"GET",headers:a}).then((e=>e.json())).then((e=>{if(e){if(e.error)return r(e.error);t("setVaultData",e.encryptedMessage),n()}})).catch((e=>{r(e)}))})),async lockVault({commit:e,getters:t}){try{const n=t.getVaultPin;let r=t.getVaultDataRaw;if(!r)return!1;if(!0===t.getVaultLockStatus)throw new Error("Vault is already locked");const s=await u(JSON.stringify(r),n);return await e("setVaultData",s),await e("setVaultLockStatus",!0),!0}catch(n){throw new Error("Error: Could not lock vault")}},async unlockVault({commit:e,getters:t}){try{const n=t.getVaultPin,r=t.getVaultData;if(!1===t.getVaultLockStatus)throw new Error("Vault is already unlocked");if(!r||"undefined"===r)return!1;const s=await l(r,n);if(""===s)throw new Error("Error: Could not unlock vault, please check your PIN");return s&&(e("setVaultRaw",s),e("setVaultLockStatus",!1)),!0}catch(n){throw new Error(n.message)}},async updateVaultCredentials({commit:e,getters:t,dispatch:n},r){try{if(!0===t.getVaultLockStatus)throw new Error("Vault is locked, please unlock first");const s=t.getVaultDataRaw;s.hypersign.credentials.push(r),s&&e("setVaultRaw",JSON.stringify(s)),await n("lockVault"),setTimeout((async()=>{n("syncUserData"),console.log("After calling syncUserData ... ")}),2e3)}catch(s){throw new Error(s.message)}},async checkIfCredentialAlreadyExistsInVault({commit:e,getters:t,state:n}){if(!0===t.getVaultLockStatus)throw new Error("Vault is locked, please unlock first");const r=t.getVaultDataRaw,{hypersign:s}=r,{credentials:o}=s,{schemaIds:a}=n;Object.keys(a).forEach((t=>{const{schemaId:n}=a[t],r=o.some((e=>{if(e&&e.credentialSchema.id===n)return e}));r&&("PersonhoodCredential"===t&&(console.log("commiting setLivelinessDone"),e("setLivelinessDone",!0)),"PassportCredential"===t&&e("setKycDone",!0))}))}}}),D=n(70326),P=n.n(D),A=function(){var e=this,t=e._self._c;return"error"===e.type?t("div",{staticStyle:{"background-color":"rgba(253, 170, 170, 0.972)",bottom:"16px",width:"96%",height:"20px","border-radius":"2px","z-index":"99999","text-align":"left","padding-left":"5px","padding-right":"5px","font-size":"small",color:"darkslategrey"}},[e._v(" "+e._s(e.shortenMesssage)+" ")]):t("div",{staticStyle:{"background-color":"rgb(184, 230, 184)",bottom:"16px",width:"96%",height:"20px","border-radius":"2px","z-index":"99999","text-align":"left","padding-left":"5px","padding-right":"5px","font-size":"small",color:"darkslategrey"}},[e._v(" "+e._s(e.msg)+" ")])},I=[],b={props:{msg:String,type:{String:String,default:"success"}},computed:{shortenMesssage(){return console.log(this.msg),this.msg.length>40?this.msg.substr(0,40)+"...":this.msg}},created(){console.log("Toast created")},mounted(){console.log(this.type)},data(){return{}}},C=b,T=(0,g.Z)(C,A,I,!1,null,"636f4afc",null),x=T.exports,E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"navbar navbar-expand-md navbar-light"},[t("div",{staticClass:"container"},[e._m(0),e.getActiveStep.name?t("span",{staticStyle:{float:"right","padding-right":"10px","padding-top":"4px","padding-left":"10px",border:"1px solid #808080eb","border-radius":"33px","padding-bottom":"4px",background:"#80808024"}},[e._v(" "+e._s(e.getActiveStep.name)+" ("+e._s(e.getActiveStep.id-2)+"/"+e._s(e.kycStepsLength)+") ")]):e._e()])])},O=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t("img",{attrs:{src:n(40633),width:"100px"}})])}],R={computed:{...(0,m.rn)(["steps"]),...(0,m.Se)(["getActiveStep"]),kycStepsLength(){return this.steps.filter((e=>null!=e.name)).length}}},_=R,N=(0,g.Z)(_,E,O,!1,null,null,null),j=N.exports,V=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v(e._s(e.header))]),t("h6",{staticStyle:{color:"grey"}},[e._v(" "+e._s(e.subHeader)+" ")])])},U=[],z={props:{header:String,subHeader:String}},L=z,K=(0,g.Z)(L,V,U,!1,null,null,null),Z=K.exports,B=n(71258),F=function(){var e=this;e._self._c;return e._m(0)},q=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"consent-message"},[t("span",[e._v(" By continuing, you agree to our "),t("a",{attrs:{href:"#",target:"_blank"}},[e._v("terms of use")]),e._v(" and "),t("a",{attrs:{href:"#",target:"_blank"}},[e._v("privacy policy")])])])}],M={},J=(0,g.Z)(M,F,q,!1,null,"50a256ae",null),W=J.exports,$=function(){var e=this,t=e._self._c;return t("p",{staticClass:"consent-message"},[t("span",[e._v(" "+e._s(e.message)+" ")])])},H=[],G={props:{message:{type:String,default:""}}},Q=G,X=(0,g.Z)(Q,$,H,!1,null,"9a296858",null),Y=X.exports,ee=n(9269),te=function(){var e=this,t=e._self._c;return t("load-ing",{attrs:{active:e.isLoadingPage,"can-cancel":!0,"is-full-page":e.fullPage},on:{"update:active":function(t){e.isLoadingPage=t}}})},ne=[],re=n(15006),se={name:"AuthTication",components:{},computed:{...(0,m.Se)(["getActiveStep"])},data(){return{isLoadingPage:!1,fullPage:!0}},methods:{...(0,m.OI)(["nextStep","setProfile"]),...(0,m.nv)(["registerUser"]),async getUserInfo(e){if(e){const t=this;re.Z.client.userInfo(e,(function(n,r){n&&console.error(n),t.$store.commit("setProfile",{...r,accessToken:e})}))}}},async mounted(){try{console.log("Inside mounted Auth");const e=this.$route.hash,t=e.split("&")[0].split("=")[1],n=e.split("&")[5].split("=")[1],r={provider:"Google",accessToken:t,authToken:n};this.$store.commit("setThridPartyAuth",r),console.log("Before calling getUserInfo"),this.getUserInfo(t),this.isLoadingPage=!0,setTimeout((async()=>{console.log("Before calling registerUser"),await this.registerUser(),console.log("After calling registerUser"),console.log("Inside mounted Auth"),this.nextStep(1),this.isLoadingPage=!1,this.$router.push({path:"/"})}),1500)}catch(e){console.log("error ="+e),this.isLoadingPage=!1,this.nextStep(1),this.$router.push({path:"/"})}}},oe=se,ae=(0,g.Z)(oe,te,ne,!1,null,null,null),ie=ae.exports;r.ZP.use(ee.ZP);const ce=new ee.ZP({mode:"history",routes:[{path:"/",name:"MainPage",component:()=>n.e(475).then(n.bind(n,83583)),meta:()=>({requiresAuth:!1,title:"Widget - User Home"})},{path:"/auth/google",name:"AuthTication",component:ie,meta:()=>({requiresAuth:!1,title:"Widget - Google Auth"})}]});var ue=ce;r.ZP.config.productionTip=!1,r.ZP.component("load-ing",P()),r.ZP.component("MessageBox",x),r.ZP.component("NavBar",j),r.ZP.component("PageHeading",Z),r.ZP.component("PoweredBy",B.Z),r.ZP.component("ConsentBox",W),r.ZP.component("InfoMessage",Y),new r.ZP({router:ue,store:w,render:e=>e(f)}).$mount("#app")},71258:function(e,t,n){n.d(t,{Z:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("div")},s=[],o=n(43736),a={},i=(0,o.Z)(a,r,s,!1,null,"fd7969e0",null),c=i.exports},40633:function(e,t,n){e.exports=n.p+"img/hypersign_black_transparent_rect.9c12af3a.png"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,s,o){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],s=e[l][1],o=e[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(l--,1);var u=s();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,s){if(1&s&&(r=this(r)),8&s)return r;if("object"===typeof r&&r){if(4&s&&r.__esModule)return r;if(16&s&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&s&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},n.d(o,a),o}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/MainPage.e1abf38c.js"}}(),function(){n.miniCssF=function(e){return"css/MainPage.76e772f6.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cavach:";n.l=function(r,s,o,a){if(e[r])e[r].push(s);else{var i,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[s];var h=function(t,n){i.onerror=i.onload=null,clearTimeout(g);var s=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,s){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,o.parentNode&&o.parentNode.removeChild(o),s(c)}};return o.onerror=o.onload=a,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var s=n[r],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===t))return s}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){s=a[r],o=s.getAttribute("data-href");if(o===e||o===t)return s}},r=function(r){return new Promise((function(s,o){var a=n.miniCssF(r),i=n.p+a;if(t(a,i))return s();e(r,i,null,s,o)}))},s={143:0};n.f.miniCss=function(e,t){var n={475:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=r(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)r.push(s[2]);else{var o=new Promise((function(n,r){s=e[t]=[n,r]}));r.push(s[2]=o);var a=n.p+n.u(t),i=new Error,c=function(r){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,s[1](i)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,o,a=r[0],i=r[1],c=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var l=c(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunkcavach"]=self["webpackChunkcavach"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(22170)}));r=n.O(r)})();
//# sourceMappingURL=app.be1de4cd.js.map
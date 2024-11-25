"use strict";(()=>{var e={};e.id=603,e.ids=[603],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},9755:(e,t,r)=>{r.r(t),r.d(t,{config:()=>p,default:()=>m,routeModule:()=>u});var s={};r.r(s),r.d(s,{default:()=>c});var o=r(1802),a=r(7153),n=r(6249);let i=require("nodemailer");var l=r.n(i);async function d(e,t){if(t.setHeader("Access-Control-Allow-Credentials",!0),t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","POST"),t.setHeader("Access-Control-Allow-Headers","Content-Type"),"POST"!==e.method)return t.status(405).json({message:`Method ${e.method} Not Allowed`,allowedMethods:["POST"]});{let{name:r,email:s,phone:o,message:a}=e.body;if(!r||!s||!o||!a)return t.status(400).json({message:"Missing required fields",error:"All fields are required"});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))return t.status(400).json({message:"Invalid email format",error:"Please provide a valid email address"});try{let e=l().createTransport({service:"gmail",auth:{user:process.env.EMAIL_USER,pass:process.env.GMAIL_APP_PASSWORD},tls:{rejectUnauthorized:!1},pool:!0,maxConnections:1,rateDelta:2e4,rateLimit:5});await e.verify();let n={from:'"Contact Form" <contactus.ascientificproducts@gmail.com>',to:"office@analyticalscientificproducts.com",replyTo:s,subject:"New Contact Form Submission",text:`
          Name: ${r}
          Email: ${s}
          Phone: ${o}
          Message: ${a}
        `,html:`
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
            <div style="margin: 20px 0;">
              <p><strong>Name:</strong> ${r}</p>
              <p><strong>Email:</strong> ${s}</p>
              <p><strong>Phone:</strong> ${o}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
                ${a.replace(/\n/g,"<br>")}
              </div>
            </div>
            <div style="color: #666; font-size: 12px; margin-top: 20px; padding-top: 10px; border-top: 1px solid #eee;">
              <p>This email was sent from the ASP contact form.</p>
            </div>
          </div>
        `};return await e.sendMail(n),t.status(200).json({message:"Email sent successfully",timestamp:new Date().toISOString()})}catch(e){return console.error("Email error:",{message:e.message,stack:e.stack,timestamp:new Date().toISOString()}),t.status(500).json({message:"Failed to send email",error:"Internal server error",timestamp:new Date().toISOString()})}}}console.log("API route file loaded");let c=d,m=(0,n.l)(s,"default"),p=(0,n.l)(s,"config"),u=new o.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/send-email-export",pathname:"/api/send-email-export",bundlePath:"",filename:""},userland:s})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=9755);module.exports=r})();
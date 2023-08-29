import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/Tab"
import { Container } from "./container"
import { ArcSiteLogo } from "components/arcsite-logo"
import checkDone from "/assets/images/check-done.svg"
import AppStoreLogo from "/assets/store/app-store-logo.svg"
import GoogleStoreLogo from "/assets/store/google-store.svg"
import MsStoreLogo from "/assets/store/ms-store.png"
import AppStoreQrCode from "/assets/store/qr-code-ios.webp"
import GoogleStoreQrCode from "/assets/store/qr-code-android.webp"
import MsStoreQrCode from "/assets/store/qr-code-windows.webp"

const APP_LINK_MAP = {
  ios: {
    logo: AppStoreLogo.src,
    link: "https://apps.apple.com/us/app/arcsite-floor-plans-and-cad/id986274256",
    qrCode: AppStoreQrCode.src,
  },
  android: {
    logo: GoogleStoreLogo.src,
    link: "https://play.google.com/store/apps/details?id=com.arcsite.app.android",
    qrCode: GoogleStoreQrCode.src,
  },
  windows: {
    logo: MsStoreLogo.src,
    link: "https://apps.microsoft.com/store/detail/arcsite/9N9HM6J715VP",
    qrCode: MsStoreQrCode.src,
  },
}

export default function StepDownload() {
  return (
    <div className="max-w-[100vw] grow px-4 pt-10">
      <div className="top-5 text-center">
        <ArcSiteLogo className="inline" />
      </div>
      <Container className="mx-auto mt-28 px-12 py-8">
        <img src={checkDone.src} />
        <div className="mt-[2.25rem] text-24 font-semibold leading-[1.875rem] text-black-85">Sign Up Complete</div>
        <div className="mt-8 text-center text-14 leading-[18px] text-black-85 sm:text-16 sm:leading-[22px]">
          Use the link or scan the QR code below to download the ArcSite App:
        </div>
        <Tabs
          defaultValue="account"
          className="my-8 w-full"
          // @ts-ignore
          defaultValue="IOS"
        >
          <TabsList className="flex w-full bg-[hsl(240,4.8%,95.9%)]">
            <TabsTrigger className="w-1/3" value="IOS">
              IOS
            </TabsTrigger>
            <TabsTrigger className="w-1/3" value="Android">
              Android
            </TabsTrigger>
            <TabsTrigger className="w-1/3" value="Windows">
              Windows
            </TabsTrigger>
          </TabsList>
          <TabsContent value="IOS">
            <DownLoadAppContent {...APP_LINK_MAP.ios} />
          </TabsContent>
          <TabsContent value="Android">
            <DownLoadAppContent {...APP_LINK_MAP.android} />
          </TabsContent>
          <TabsContent value="Windows">
            <DownLoadAppContent {...APP_LINK_MAP.windows} />
          </TabsContent>
        </Tabs>
        <div className="mb-2 text-center text-12 leading-[14px] text-black-85 sm:text-12 sm:leading-[22px]">
          Don't have your device?{" "}
          <a className="text-[#1890ff]" target="_blank" href="/#/app/projects">
            Continue in the browser
          </a>
        </div>
      </Container>
    </div>
  )
}

function DownLoadAppContent({ link, logo, qrCode }: { link: string; logo: string; qrCode: string }) {
  return (
    <div className="flex">
      <div className="text-center sm:mt-[6px] sm:w-[210px]">
        <a className="mt-8 inline-block text-center" target="_blank" href={link} rel="noreferrer">
          <img alt="app store" className="inline h-12" src={logo} />
        </a>
      </div>
      <div className="my-4 h-[1px] w-[281px] bg-black-10 sm:mx-[40px] sm:my-0 sm:h-[172px] sm:w-[1px]"></div>
      <div className="flex flex-col justify-center sm:w-[210px] sm:pl-[16px]">
        <img alt="app store" className="h-[120px] w-[120px]" src={qrCode} />
      </div>
    </div>
  )
}

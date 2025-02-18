import { makeInstaller } from '@gene-design/utils';
import components from "./components";
import '@gene-design/theme/index.css'

const installer = makeInstaller(components);

export * from "@gene-design/components";
export default installer;
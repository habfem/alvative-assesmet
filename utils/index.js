import path from "path";
import url from "url";

function currDir(fileUrl) {
  const __filename = url.fileURLToPath(fileUrl);
  return path.dirname(__filename);
}

export default currDir
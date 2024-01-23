import {Link} from "@/interfaces/link";

export interface Video {
  video_name: {
    String: string,
  },
  video_name_cn: {
    String: string,
  },
  release_date: {
    DATE: Date,
  },
  author_name: {
    Array: Array<string>,
  },
  description: {
    String: string,
  },
  description_cn: {
    String: string,
  },
  links: {
    JSON: Array<Link>,
  },
}

import {Link} from "@/interfaces/link";

export interface Track {
  track_name: {
    String: string,
  },
  track_name_cn: {
    String: string,
  },
  release_date: {
    DATE: Date,
  },
  author_name: {
    String: string,
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

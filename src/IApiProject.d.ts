export interface IApiProject {
  id: number,
  title: string,
  description: string,
  date: string,
  link_name: string,
  link_value: string,
  images?: {
    id: number
    directus_files_id: {
      data?: {
        full_url: string
        thumbnails: {
          key: "directus-small-crop"
            | "directus-small-contain"
            | "directus-medium-crop"
            | "directus-medium-contain"
            | "directus-large-crop"
            | "directus-large-contain"
            | "thumbnail"
          url: string
          width: number
          height: number
        }[]
      }
    }
  }[]
}

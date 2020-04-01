// TO DO: upload to AWS S3 or something
export const uploadImage = async () => {
      //   const file = await toBase64(image); 
      const { url } = await fetch('https://picsum.photos/360')

      return url
}
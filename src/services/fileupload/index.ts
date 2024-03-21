import api from "../api/apiSlice";

const fileupload = api.injectEndpoints({
  endpoints: (build) => ({
    uploadfile: build.mutation<string, FormData>({
      query: (formData) => {
        return {
          url: "/file-upload/upload",
          method: "POST",
          body: formData,
          responseHandler: (response) => response.text(),
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useUploadfileMutation } = fileupload;

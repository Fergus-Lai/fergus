import { defineCollection, z } from "astro:content";
const projectCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        startDate: z.string().transform((str) => {
            const dateList = str.split("/");
            return new Date(
                parseInt(dateList[1]),
                parseInt(dateList[0]) - 1,
                1
            );
        }),
        endDate: z
            .string()
            .transform((str) => {
                const dateList = str.split("/");
                return new Date(
                    parseInt(dateList[1]),
                    parseInt(dateList[0]) - 1,
                    1
                );
            })
            .optional(),
        techStack: z.string(),
        github: z.string().url().optional(),
    }),
});
export const collections = {
    project: projectCollection,
};

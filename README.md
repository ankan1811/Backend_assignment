# Backend_assignment (I have deliberately uploaded env file only for testing purposes)

Setup should simply be:
npm install
npm start

I have completed the assignment 100% and mentioned all apis to be hit below.

Blog.
Reviews on the Blogs.

Blog Model:
1→ Title
2→ Body(text)
3 → cDate (yyyy/mm/dd/hh/mm/ss)
4 → uDate(yyyy/mm/dd/hh/mm/ss)
5 → _id (uuid v4)

Review Model:
1 → userId
2 → description
3 → cDate (yyyy/mm/dd/hh/mm/ss)
4 → uDate(yyyy/mm/dd/hh/mm/ss)
5 → _id (uuid v4)

Apis→
1 → Get All Blogs (/blogs/getblog)
2 → Get Blog By Id(/blogs/getblogbyid/:blogid)
3 → Create Blog(/blogs/postblog)
4 → Update Blog(/blogs/edit/:blogid)
5 → Delete Blog(/blogs/deleteblog/:blogid)


6 → Create Review (/blogreviews/postblogreview)
7 → Delete Review (/blogreviews/deleteblogreview/:blogreviewid)
8 → Get All Reviews(/blogreviews/getblogreview)

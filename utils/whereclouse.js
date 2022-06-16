const { search } = require("../routes/userRouter");

class WhereClause {
    constructor(base, bigQ) {
        this.base = base;
        this.bigQ = bigQ;
    }

    search() {
        const searchword = this.bigQ.search ? {
            name: {
                $regex: this.bigQ.search,
                $options: "i",
            },
        } : {};
        this.base = this.base.find({ ...searchword });
        return this;
    }

    filter() {
        const copyQ = { ...this.bigQ }
        delete copyQ["search"];
        delete copyQ["limit"];
        delete copyQ["page"];

        //conver bigQ into a string
        let stringOfCopyQ = JSON.stringify(copyQ);
        stringOfCopyQ = stringOfCopyQ.replace(/\b(gte|lte|gt|l t)\b/g, m => `$$(m)`)

        jsonOfCopyQ = JSON.parse(stringOfCopyQ);

        this.base = this.base.find(jsonOfCopyQ);
    }

    Pager(resultperPage) {
        let currentPage = 1;
        if (this.bigQ.page) {
            currentPage = tis.bigQ.page
        }
        const skipVal = resultperPage * (currentPage - 1)
        this.base = this.base.limit(resultperPage).skip(skipVal)
        return this;
    }
}
module.exports = WhereClause;
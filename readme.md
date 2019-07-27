# nodepop

## Model

### Ad

-   id: string
-   article: Article

### Article

-   id: string
-   name: string
-   type: ArticleType
-   price: Price
-   photo: blob
-   tags: Tag[]

### ArticleType

-   1: To be sold
-   2: To be searched

### Tag

-   1: work
-   2: lifestyle
-   3: motor
-   4: mobile

### Price

-   value: number
-   currency: string

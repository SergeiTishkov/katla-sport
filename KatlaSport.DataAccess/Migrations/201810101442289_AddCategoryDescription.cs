namespace KatlaSport.DataAccess.Migrations
{
    using System.Data.Entity.Migrations;

    /// <summary>
    /// This migration adds new property named "Description" to the "Category" entity.
    /// </summary>
    public partial class AddCategoryDescription : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.product_categories", "category_description", c => c.String(maxLength: 300));
        }

        public override void Down()
        {
            DropColumn("dbo.product_categories", "category_description");
        }
    }
}

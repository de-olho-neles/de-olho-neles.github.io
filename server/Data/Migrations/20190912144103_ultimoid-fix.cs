using Microsoft.EntityFrameworkCore.Migrations;

namespace server.Migrations
{
    public partial class ultimoidfix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DetailedDeputado_UltimoStatus_ultimoStatusid",
                table: "DetailedDeputado");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "UltimoStatus",
                newName: "ultimoStatusId");

            migrationBuilder.RenameColumn(
                name: "ultimoStatusid",
                table: "DetailedDeputado",
                newName: "ultimoStatusId");

            migrationBuilder.RenameIndex(
                name: "IX_DetailedDeputado_ultimoStatusid",
                table: "DetailedDeputado",
                newName: "IX_DetailedDeputado_ultimoStatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_DetailedDeputado_UltimoStatus_ultimoStatusId",
                table: "DetailedDeputado",
                column: "ultimoStatusId",
                principalTable: "UltimoStatus",
                principalColumn: "ultimoStatusId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DetailedDeputado_UltimoStatus_ultimoStatusId",
                table: "DetailedDeputado");

            migrationBuilder.RenameColumn(
                name: "ultimoStatusId",
                table: "UltimoStatus",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "ultimoStatusId",
                table: "DetailedDeputado",
                newName: "ultimoStatusid");

            migrationBuilder.RenameIndex(
                name: "IX_DetailedDeputado_ultimoStatusId",
                table: "DetailedDeputado",
                newName: "IX_DetailedDeputado_ultimoStatusid");

            migrationBuilder.AddForeignKey(
                name: "FK_DetailedDeputado_UltimoStatus_ultimoStatusid",
                table: "DetailedDeputado",
                column: "ultimoStatusid",
                principalTable: "UltimoStatus",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

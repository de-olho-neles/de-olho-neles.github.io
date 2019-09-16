using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace server.Migrations
{
    public partial class DetailedDeputadoMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Deputado");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "AspNetUsers");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "AspNetUsers",
                newName: "UserName");

            migrationBuilder.AlterColumn<string>(
                name: "UserName",
                table: "AspNetUsers",
                maxLength: 256,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "Gabinete",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    nome = table.Column<string>(nullable: true),
                    predio = table.Column<string>(nullable: true),
                    sala = table.Column<string>(nullable: true),
                    andar = table.Column<string>(nullable: true),
                    telefone = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gabinete", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "UltimoStatus",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    uri = table.Column<string>(nullable: true),
                    nome = table.Column<string>(nullable: true),
                    siglaPartido = table.Column<string>(nullable: true),
                    uriPartido = table.Column<string>(nullable: true),
                    siglaUf = table.Column<string>(nullable: true),
                    idLegislatura = table.Column<int>(nullable: false),
                    urlFoto = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    data = table.Column<string>(nullable: true),
                    nomeEleitoral = table.Column<string>(nullable: true),
                    gabineteid = table.Column<int>(nullable: true),
                    situacao = table.Column<string>(nullable: true),
                    condicaoEleitoral = table.Column<string>(nullable: true),
                    descricaoStatus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UltimoStatus", x => x.id);
                    table.ForeignKey(
                        name: "FK_UltimoStatus_Gabinete_gabineteid",
                        column: x => x.gabineteid,
                        principalTable: "Gabinete",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DetailedDeputado",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    uri = table.Column<string>(nullable: true),
                    nomeCivil = table.Column<string>(nullable: true),
                    ultimoStatusid = table.Column<int>(nullable: true),
                    cpf = table.Column<string>(nullable: true),
                    sexo = table.Column<string>(nullable: true),
                    urlWebsite = table.Column<string>(nullable: true),
                    dataNascimento = table.Column<string>(nullable: true),
                    dataFalecimento = table.Column<string>(nullable: true),
                    ufNascimento = table.Column<string>(nullable: true),
                    municipioNascimento = table.Column<string>(nullable: true),
                    escolaridade = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    UsuarioId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetailedDeputado", x => x.id);
                    table.ForeignKey(
                        name: "FK_DetailedDeputado_AspNetUsers_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_DetailedDeputado_UltimoStatus_ultimoStatusid",
                        column: x => x.ultimoStatusid,
                        principalTable: "UltimoStatus",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Despesa",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ano = table.Column<int>(nullable: false),
                    mes = table.Column<int>(nullable: false),
                    tipoDespesa = table.Column<string>(nullable: true),
                    codDocumento = table.Column<int>(nullable: false),
                    tipoDocumento = table.Column<string>(nullable: true),
                    codTipoDocumento = table.Column<int>(nullable: false),
                    dataDocumento = table.Column<string>(nullable: true),
                    numDocumento = table.Column<string>(nullable: true),
                    valorDocumento = table.Column<double>(nullable: false),
                    urlDocumento = table.Column<string>(nullable: true),
                    nomeFornecedor = table.Column<string>(nullable: true),
                    cnpjCpfFornecedor = table.Column<string>(nullable: true),
                    valorLiquido = table.Column<double>(nullable: false),
                    valorGlosa = table.Column<double>(nullable: false),
                    numRessarcimento = table.Column<string>(nullable: true),
                    codLote = table.Column<int>(nullable: false),
                    parcela = table.Column<int>(nullable: false),
                    DetailedDeputadoid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Despesa", x => x.id);
                    table.ForeignKey(
                        name: "FK_Despesa_DetailedDeputado_DetailedDeputadoid",
                        column: x => x.DetailedDeputadoid,
                        principalTable: "DetailedDeputado",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Frente",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    uri = table.Column<string>(nullable: true),
                    titulo = table.Column<string>(nullable: true),
                    idLegislatura = table.Column<int>(nullable: false),
                    DetailedDeputadoid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Frente", x => x.id);
                    table.ForeignKey(
                        name: "FK_Frente_DetailedDeputado_DetailedDeputadoid",
                        column: x => x.DetailedDeputadoid,
                        principalTable: "DetailedDeputado",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Orgao",
                columns: table => new
                {
                    idOrgao = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    uriOrgao = table.Column<string>(nullable: true),
                    siglaOrgao = table.Column<string>(nullable: true),
                    nomeOrgao = table.Column<string>(nullable: true),
                    titulo = table.Column<string>(nullable: true),
                    codTitulo = table.Column<string>(nullable: true),
                    dataInicio = table.Column<string>(nullable: true),
                    dataFim = table.Column<string>(nullable: true),
                    DetailedDeputadoid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orgao", x => x.idOrgao);
                    table.ForeignKey(
                        name: "FK_Orgao_DetailedDeputado_DetailedDeputadoid",
                        column: x => x.DetailedDeputadoid,
                        principalTable: "DetailedDeputado",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Despesa_DetailedDeputadoid",
                table: "Despesa",
                column: "DetailedDeputadoid");

            migrationBuilder.CreateIndex(
                name: "IX_DetailedDeputado_UsuarioId",
                table: "DetailedDeputado",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_DetailedDeputado_ultimoStatusid",
                table: "DetailedDeputado",
                column: "ultimoStatusid");

            migrationBuilder.CreateIndex(
                name: "IX_Frente_DetailedDeputadoid",
                table: "Frente",
                column: "DetailedDeputadoid");

            migrationBuilder.CreateIndex(
                name: "IX_Orgao_DetailedDeputadoid",
                table: "Orgao",
                column: "DetailedDeputadoid");

            migrationBuilder.CreateIndex(
                name: "IX_UltimoStatus_gabineteid",
                table: "UltimoStatus",
                column: "gabineteid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Despesa");

            migrationBuilder.DropTable(
                name: "Frente");

            migrationBuilder.DropTable(
                name: "Orgao");

            migrationBuilder.DropTable(
                name: "DetailedDeputado");

            migrationBuilder.DropTable(
                name: "UltimoStatus");

            migrationBuilder.DropTable(
                name: "Gabinete");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "AspNetUsers",
                newName: "Username");

            migrationBuilder.AlterColumn<string>(
                name: "Username",
                table: "AspNetUsers",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 256,
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "AspNetUsers",
                maxLength: 256,
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Deputado",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UsuarioId = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    idLegislatura = table.Column<int>(nullable: false),
                    nome = table.Column<string>(nullable: true),
                    siglaPartido = table.Column<string>(nullable: true),
                    siglaUf = table.Column<string>(nullable: true),
                    uri = table.Column<string>(nullable: true),
                    uriPartido = table.Column<string>(nullable: true),
                    urlFoto = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Deputado", x => x.id);
                    table.ForeignKey(
                        name: "FK_Deputado_AspNetUsers_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Deputado_UsuarioId",
                table: "Deputado",
                column: "UsuarioId");
        }
    }
}

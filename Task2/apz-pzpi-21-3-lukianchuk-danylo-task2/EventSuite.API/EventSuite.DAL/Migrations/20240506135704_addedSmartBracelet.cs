using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EventSuite.DAL.Migrations
{
    /// <inheritdoc />
    public partial class addedSmartBracelet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SmartBraceletId",
                table: "Tickets",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "SmartBracelet",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SerialNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
                    StartUsageDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EndUsageDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    AccessLatitude1 = table.Column<double>(type: "float", nullable: true),
                    AccessLatitude2 = table.Column<double>(type: "float", nullable: true),
                    AccessLongitude1 = table.Column<double>(type: "float", nullable: true),
                    AccessLongitude2 = table.Column<double>(type: "float", nullable: true),
                    CurrentLatitude = table.Column<double>(type: "float", nullable: true),
                    CurrentLongitude = table.Column<double>(type: "float", nullable: true),
                    DateCreated = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DateUpdated = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SmartBracelet", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_SmartBraceletId",
                table: "Tickets",
                column: "SmartBraceletId");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_SmartBracelet_SmartBraceletId",
                table: "Tickets",
                column: "SmartBraceletId",
                principalTable: "SmartBracelet",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_SmartBracelet_SmartBraceletId",
                table: "Tickets");

            migrationBuilder.DropTable(
                name: "SmartBracelet");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_SmartBraceletId",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "SmartBraceletId",
                table: "Tickets");
        }
    }
}

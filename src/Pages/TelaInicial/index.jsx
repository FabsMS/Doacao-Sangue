import { Box } from "@mui/material";
import InputTelefone from "../../Components/Inputs/InputTelefone";
import InputTexto from "../../Components/Inputs/InputTexto";
import LogoSTTP from "../../../public/sttp_marca_app.png";
import LogoCampinaGrande from "../../../public/logo pmcg_Prancheta 1.png";
import React from "react";
import BotaoComum from "../../Components/Botao";
import CircularProgress from "@mui/material/CircularProgress";

export default function TelaInicial() {
    const [nome, setNome] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const limparCampos = () => {
        setNome("");
        setCpf("");
        setTelefone("");
    };

    const handleCpfChange = (value) => {
        // Remove qualquer caractere que não seja número
        const numericValue = value.replace(/\D/g, "");

        // Aplica a máscara
        const maskedValue = numericValue
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
            .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4")
            .slice(0, 14);

        setCpf(maskedValue);
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (!nome || !cpf || !telefone) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        const data = {
            Nome: nome,
            CPF: cpf,
            Telefone: telefone,
        };

        setLoading(true);

        try {
            const response = await fetch(
                'https://api.sheetbest.com/sheets/35192c64-a822-47e3-8381-e6ad3dea00d8',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                alert("Dados enviados com sucesso!");
                limparCampos();
            } else {
                alert("Erro ao enviar os dados.");
            }
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
            alert("Erro ao enviar os dados.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                bgcolor: "#f0f0f0",
                p: 2,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: { xs: "90%", sm: "75%", md: "60vh" },
                    bgcolor: "#ffffff",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    borderRadius: 2,
                    p: { xs: 2, sm: 4 },
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: { xs: 2, sm: 3 },
                        mb: 3,
                    }}
                >
                    <img
                        style={{ height: 45, maxWidth: "100%", objectFit: "contain" }}
                        src={LogoSTTP}
                        alt="Logo STTP"
                    />
                    <img
                        style={{ height: 45, maxWidth: "100%", objectFit: "contain" }}
                        src={LogoCampinaGrande}
                        alt="Logo Campina Grande"
                    />
                </Box>
                <h2>Preencha seus Dados</h2>
                <p style={{ marginBottom: 20, marginTop: 20 }}>
                    Os dados em questão serão usados apenas para fins de cadastro, para a
                    lista de pessoas que desejarem participar da doação de sangue que
                    ocorrerá no próximo dia 30/01 (Quinta-Feira).
                </p>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "stretch",
                    }}
                >
                    <InputTexto
                        label="Nome"
                        value={nome}
                        setValue={setNome}
                        placeholder="Digite seu nome completo"
                    />
                    <InputTexto
                        label="CPF"
                        value={cpf}
                        setValue={handleCpfChange}
                        placeholder="Digite seu CPF"
                    />
                    <InputTelefone
                        label="Telefone"
                        value={telefone}
                        setValue={setTelefone}
                    />
                    <BotaoComum
                        texto={"Limpar Campos"}
                        background={"#FF010B"}
                        backgroundHover={"#9C0607"}
                        funcao={limparCampos}
                    />
                    {loading ? (
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <BotaoComum
                            texto={"Cadastrar"}
                            background={"#00A722"}
                            backgroundHover={"#007344"}
                            funcao={submitForm}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
}

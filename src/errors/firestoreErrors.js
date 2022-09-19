export default function VerifyErrorCode(errorCode){

//     storage/unknown	Ocorreu um erro desconhecido.
// storage/object-not-found	Nenhum objeto na referência desejada.


// storage/bucket-not-found	Nenhum bucket configurado para o Cloud Storage.
// storage/project-not-found	Nenhum projeto configurado para o Cloud Storage.
// storage/quota-exceeded	A cota do bucket do Cloud Storage foi excedida. Se você estiver no nível sem custo financeiro, faça upgrade para um plano pago. Se você estiver em um plano pago, entre em contato com o suporte do Firebase.

// storage/unauthenticated	O usuário não está autenticado. Faça a autenticação e tente novamente.
// storage/unauthorized	O usuário não está autorizado a executar a ação desejada. Verifique suas regras de segurança para garantir que estejam corretas.
// storage/retry-limit-exceeded	O limite máximo de tempo em uma operação (upload, download, exclusão etc.) foi excedido. Envie novamente.
// storage/invalid-checksum	O arquivo no cliente não corresponde à soma de verificação do arquivo recebido pelo servidor. Envie novamente.
// storage/canceled	O usuário cancelou a operação.
// storage/invalid-event-name	Nome inválido do evento fornecido. Precisa ser um dos valores [`running`, `progress`, `pause`]
// storage/invalid-url	URL inválido fornecido para refFromURL(). Deve estar no formato: gs://bucket/object ou https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=&ltTOKEN>.
// storage/invalid-argument	O argumento transmitido a put() precisa ser matriz "File", "Blob" ou "UInt8". O argumento transmitido a putString() precisa ser uma string bruta "Base64" ou "Base64URL".
// storage/no-default-bucket	Nenhum bucket foi definido na propriedade storageBucket da configuração.
// storage/cannot-slice-blob	Em geral, isso ocorre normalmente quando o arquivo local é alterado (excluído, salvo novamente etc.). Tente fazer o upload novamente após verificar que o arquivo não foi alterado.
// storage/server-file-wrong-size	O arquivo no cliente não corresponde ao tamanho do arquivo recebido pelo servidor. Envie novamente.



    switch (errorCode) {
        case 'storage/unknown':
            return 'Ocorreu um erro desconhecido';
        case 'storage/object-not-found':
            return 'Nenhum objeto na referência desejada';
        case 'storage/bucket-not-found':
            return 'Nenhum bucket configurado para o Cloud Storage';
        case 'storage/quota-exceeded':
            return 'A cota do bucket do Cloud Storage foi excedida. Se você estiver no nível sem custo financeiro, faça upgrade para um plano pago. Se você estiver em um plano pago, entre em contato com o suporte do Firebase';
        case 'storage/unauthenticated':
            return 'O usuário não está autenticado. Faça a autenticação e tente novamente.';
        case 'storage/unauthorized':
            return 'O usuário não está autorizado a executar a ação desejada. Verifique suas regras de segurança para garantir que estejam corretas.';
        case 'storage/retry-limit-exceeded':
            return 'O limite máximo de tempo em uma operação (upload, download, exclusão etc.) foi excedido. Envie novamente.';
        case 'storage/invalid-checksum':
            return 'O arquivo no cliente não corresponde à soma de verificação do arquivo recebido pelo servidor. Envie novamente.';
        
        default:
            return null;


    }
}
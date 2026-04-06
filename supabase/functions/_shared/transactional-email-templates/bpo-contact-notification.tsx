import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Valorum"

interface BPOContactNotificationProps {
  name?: string
  email?: string
  phone?: string
  company?: string
  revenue_range?: string
  message?: string
}

const BPOContactNotificationEmail = ({
  name,
  email,
  phone,
  company,
  revenue_range,
  message,
}: BPOContactNotificationProps) => (
  <Html lang="pt-BR" dir="ltr">
    <Head />
    <Preview>Nova solicitação de diagnóstico BPO - {name || 'Novo contato'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          Nova solicitação de Diagnóstico BPO
        </Heading>
        <Text style={text}>
          Um novo contato foi recebido através do formulário do BPO Financeiro.
        </Text>

        <Section style={detailsBox}>
          <Text style={label}>Nome:</Text>
          <Text style={value}>{name || '—'}</Text>

          <Text style={label}>Email:</Text>
          <Text style={value}>{email || '—'}</Text>

          {phone && (
            <>
              <Text style={label}>Telefone / WhatsApp:</Text>
              <Text style={value}>{phone}</Text>
            </>
          )}

          {company && (
            <>
              <Text style={label}>Empresa:</Text>
              <Text style={value}>{company}</Text>
            </>
          )}

          {revenue_range && (
            <>
              <Text style={label}>Faturamento mensal:</Text>
              <Text style={value}>{revenue_range}</Text>
            </>
          )}

          {message && (
            <>
              <Hr style={hr} />
              <Text style={label}>Mensagem:</Text>
              <Text style={value}>{message}</Text>
            </>
          )}
        </Section>

        <Text style={footer}>
          Este email foi enviado automaticamente pelo formulário de contato do site {SITE_NAME}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: BPOContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    `Novo diagnóstico BPO — ${data.name || 'Novo contato'}`,
  displayName: 'Notificação de contato BPO',
  to: 'atendimento@cfvalorum.com.br',
  previewData: {
    name: 'João Silva',
    email: 'joao@empresa.com.br',
    phone: '(11) 99999-0000',
    company: 'Empresa Exemplo LTDA',
    revenue_range: 'R$ 200 mil – R$ 500 mil/mês',
    message: 'Gostaria de saber mais sobre o BPO Financeiro para minha empresa.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '20px 25px', maxWidth: '600px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1a1f36', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.5', margin: '0 0 15px' }
const detailsBox = {
  backgroundColor: '#f7f8fa',
  borderRadius: '8px',
  padding: '20px',
  margin: '0 0 25px',
}
const label = { fontSize: '12px', color: '#8898aa', margin: '0 0 2px', textTransform: 'uppercase' as const, fontWeight: 'bold' as const, letterSpacing: '0.5px' }
const value = { fontSize: '14px', color: '#1a1f36', margin: '0 0 12px', lineHeight: '1.4' }
const hr = { borderColor: '#e6ebf1', margin: '12px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }

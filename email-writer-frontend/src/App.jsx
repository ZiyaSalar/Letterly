import { useState } from 'react'
import './App.css'
import { Box, Button, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Paper, Card, CardContent } from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card sx={{ p: 3, boxShadow: 4, borderRadius: 3, background: 'linear-gradient(135deg, #f5f7fa, #e6e9f0)' }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          sx={{ 
            textAlign: 'center', 
            fontWeight: 700, 
            color: '#2c3e50',
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Email Reply Generator
        </Typography>

        <CardContent>
          <Box sx={{ mx: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              label="Original Email Content"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              sx={{ mb: 3, bgcolor: 'white', borderRadius: 1 }}
            />

            <FormControl fullWidth sx={{ mb: 3, bgcolor: 'white', borderRadius: 1 }}>
              <InputLabel>Tone (Optional)</InputLabel>
              <Select
                value={tone}
                label="Tone (Optional)"
                onChange={(e) => setTone(e.target.value)}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              fullWidth
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: 2
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : "Generate Reply"}
            </Button>
          </Box>

          {error && (
            <Typography color="error" sx={{ mt: 3, textAlign: 'center', fontWeight: 500 }}>
              {error}
            </Typography>
          )}

          {generatedReply && (
            <Paper
              elevation={3}
              sx={{ mt: 4, p: 3, borderRadius: 2, background: '#f4f6f8' }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#34495e' }}>
                Generated Reply:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={generatedReply}
                inputProps={{ readOnly: true }}
                sx={{ bgcolor: 'white', borderRadius: 1 }}
              />
              <Button
                variant="outlined"
                sx={{ mt: 2, borderRadius: 2, fontWeight: 500 }}
                onClick={() => navigator.clipboard.writeText(generatedReply)}
              >
                Copy to Clipboard
              </Button>
            </Paper>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;

const express = require('express');
const app = express();
const collection1 = require('./db1');
const cors = require('cors');
const Packet = require('./packet');
const Checker = require('./Checker');
const Institute = require('./Institute');
const Assignment = require('./Assignment');

app.use(cors());
app.use(express.json());

// Get all registered users (for testing or other purposes)
app.get('/', async (req, res) => {
    try {
        const data = await collection1.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new assignment
app.post('/api/assignments', async (req, res) => {
    try {
        const assignment = new Assignment(req.body);
        const savedAssignment = await assignment.save();
        res.status(200).json(savedAssignment);
    } catch (err) {
        res.status(400).json({ error: 'Failed to save assignment details' });
    }
});

// Create new checker
app.post('/api/checkers', async (req, res) => {
    try {
        const checker = new Checker(req.body);
        const savedChecker = await checker.save();
        res.status(200).json(savedChecker);
    } catch (err) {
        res.status(400).json({ error: 'Failed to save checker details' });
    }
});

// Create new packet
app.post('/api/packets', async (req, res) => {
    try {
        const packet = new Packet(req.body);
        const savedPacket = await packet.save();
        res.status(200).json(savedPacket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Create new institute
app.post('/api/institutes', async (req, res) => {
    try {
        const institute = new Institute(req.body);
        const savedInstitute = await institute.save();
        res.status(200).json(savedInstitute);
    } catch (err) {
        res.status(400).json({ error: 'Failed to save institute details' });
    }
});

// Get packets by email
app.get('/api/packets/:email', async (req, res) => {
    try {
        const packets = await Packet.find({ email: req.params.email });
        res.status(200).json(packets);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch packet data' });
    }
});

// Get checkers by email
app.get('/api/checkers/:email', async (req, res) => {
    try {
        const checkers = await Checker.find({ email: req.params.email });
        res.status(200).json(checkers);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch checker data' });
    }
});

// Get institutes by email
app.get('/api/institutes/:email', async (req, res) => {
    try {
        const institutes = await Institute.find({ email: req.params.email });
        res.status(200).json(institutes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch institute data' });
    }
});

// Get assignments by email
app.get('/api/assignments/:email', async (req, res) => {
    try {
        const assignments = await Assignment.find({ email: req.params.email });
        res.status(200).json(assignments);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch assignment data' });
    }
});

// Update packet
// Update packet
app.put('/api/packets/:id', async (req, res) => {
    try {
        const updatedPacket = await Packet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPacket) {
            return res.status(404).json({ error: 'Packet not found' });
        }
        res.status(200).json(updatedPacket);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update packet details' });
    }
});

// Update checker
app.put('/api/checkers/:id', async (req, res) => {
    try {
        const updatedChecker = await Checker.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedChecker) {
            return res.status(404).json({ error: 'Checker not found' });
        }
        res.status(200).json(updatedChecker);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update checker details' });
    }
});

// Update institute
app.put('/api/institutes/:id', async (req, res) => {
    try {
        const updatedInstitute = await Institute.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedInstitute) {
            return res.status(404).json({ error: 'Institute not found' });
        }
        res.status(200).json(updatedInstitute);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update institute details' });
    }
});

// Update assignment
app.put('/api/assignments/:id', async (req, res) => {
    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAssignment) {
            return res.status(404).json({ error: 'Assignment not found' });
        }
        res.status(200).json(updatedAssignment);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update assignment details' });
    }
});
// Register user
app.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const data = new collection1({ name, email, password });
        const result = await data.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

// Login user
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await collection1.findOne({ email });
        if (data && data.email === email && data.password === password) {
            res.status(200).json(data);
            console.log('Login successful');
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
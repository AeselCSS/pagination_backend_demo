import connection from "../db.config.js";
export const getAllEmployees = async (_req, res) => {
    try {
        const [results] = await connection.execute("SELECT * FROM employees");
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({
            error: error instanceof Error ? error.message : 'An unknown error occurred.'
        });
    }
};
export const getEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const [results] = await connection.execute("SELECT * FROM employees WHERE id = ?", [id]);
        const employee = results[0];
        if (!employee) {
            res.status(404).json({ error: `Employee with id ${id} not found` });
            return;
        }
        res.status(200).json(employee);
    }
    catch (error) {
        res.status(500).json({
            error: error instanceof Error ? error.message : 'An unknown error occurred.'
        });
    }
};
